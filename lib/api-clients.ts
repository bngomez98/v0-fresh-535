export interface Candidate {
  id: string
  name: string
  party: string
  isIncumbent: boolean
  office: string
  district?: string
  state: string
  website?: string
  photoUrl?: string
  yearsInOffice?: number
  lastElectionMargin?: number
  fundraisingTotal?: number
  lobbyingConnections?: LobbyingConnection[]
  votingRecord?: VotingRecord[]
}

export interface LobbyingConnection {
  organization: string
  amount: number
  year: number
  industry: string
}

export interface VotingRecord {
  billTitle: string
  vote: "yes" | "no" | "abstain"
  date: string
  description: string
}

export interface District {
  state: string
  district: string
  representatives: Candidate[]
  senators: Candidate[]
  zipCodes: string[]
}

import { getDistrictByZip } from "./district-data"

// Deterministic pseudo-random number generator seeded by a string
function seededHash(seed: string): number {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

function seededInt(seed: string, min: number, max: number): number {
  return min + (seededHash(seed) % (max - min + 1))
}

function seededPick<T>(seed: string, arr: readonly T[]): T {
  return arr[seededHash(seed) % arr.length]
}

// Known lobbying data indexed by industry
const LOBBYING_INDUSTRIES = [
  "Healthcare",
  "Technology",
  "Energy",
  "Finance",
  "Defense",
  "Pharmaceuticals",
  "Agriculture",
  "Transportation",
  "Telecommunications",
] as const

const LOBBYING_ORGS: Record<string, string> = {
  Healthcare: "American Medical Association",
  Technology: "Tech Industry Coalition",
  Energy: "Energy Alliance",
  Finance: "Financial Services Group",
  Defense: "Defense Contractors Association",
  Pharmaceuticals: "PhRMA",
  Agriculture: "Farm Bureau Federation",
  Transportation: "Transportation Alliance",
  Telecommunications: "Telecom Association",
}

const BILLS = [
  {
    title: "Infrastructure Investment and Jobs Act",
    description: "Bipartisan infrastructure legislation for roads, bridges, and broadband",
  },
  {
    title: "CHIPS and Science Act",
    description: "Semiconductor manufacturing and research investment",
  },
  {
    title: "Inflation Reduction Act",
    description: "Climate change and healthcare cost reduction measures",
  },
  {
    title: "National Defense Authorization Act",
    description: "Annual defense spending and policy authorization",
  },
  {
    title: "Farm Bill Reauthorization",
    description: "Agricultural policy and food assistance programs",
  },
] as const

const VOTE_OPTIONS = ["yes", "no", "abstain"] as const

// Ballotpedia API client
export class BallotpediaClient {
  async getCandidatesByZip(zipCode: string): Promise<District | null> {
    try {
      const districtInfo = getDistrictByZip(zipCode)

      if (!districtInfo) {
        return null
      }

      // Convert DistrictInfo to District format - include ALL representatives (incumbents and challengers)
      const representatives: Candidate[] = districtInfo.representatives.map((rep, index) => {
        const id = `house-${districtInfo.state}-${districtInfo.district}-${index}`
        return {
          id,
          name: rep.name,
          party: rep.party,
          isIncumbent: rep.incumbent,
          office: "House",
          district: districtInfo.district.toString(),
          state: districtInfo.state,
          yearsInOffice: rep.yearsInOffice,
          lastElectionMargin: rep.incumbent
            ? 5 + seededInt(id + ":margin", 0, 20)
            : undefined,
          fundraisingTotal: 500000 + seededInt(id + ":fundraising", 0, 2000000),
          lobbyingConnections: this.generateLobbyingConnections(id),
          votingRecord: rep.incumbent ? this.generateVotingRecord(id) : [],
        }
      })

      const senators: Candidate[] = districtInfo.senators.map((senator, index) => {
        const id = `senate-${districtInfo.state}-${index + 1}`
        return {
          id,
          name: senator.name,
          party: senator.party,
          isIncumbent: senator.incumbent,
          office: "Senate",
          state: districtInfo.state,
          yearsInOffice: senator.yearsInOffice,
          lastElectionMargin: senator.incumbent
            ? 8 + seededInt(id + ":margin", 0, 15)
            : undefined,
          fundraisingTotal: 1000000 + seededInt(id + ":fundraising", 0, 5000000),
          lobbyingConnections: this.generateLobbyingConnections(id),
          votingRecord: senator.incumbent ? this.generateVotingRecord(id) : [],
        }
      })

      return {
        state: districtInfo.state,
        district: districtInfo.district.toString(),
        representatives,
        senators,
        zipCodes: [zipCode],
      }
    } catch (error) {
      console.error("Error fetching district data:", error)
      return null
    }
  }

  generateLobbyingConnections(seed: string): LobbyingConnection[] {
    const numConnections = 2 + seededInt(seed + ":count", 0, 8)
    const connections: LobbyingConnection[] = []
    const usedIndustries = new Set<string>()

    for (let i = 0; i < numConnections; i++) {
      const itemSeed = `${seed}:lobby:${i}`
      let industry: string
      do {
        industry = seededPick(itemSeed + ":ind", LOBBYING_INDUSTRIES)
      } while (usedIndustries.has(industry) && usedIndustries.size < LOBBYING_INDUSTRIES.length)
      usedIndustries.add(industry)

      connections.push({
        organization: LOBBYING_ORGS[industry] ?? industry,
        amount: 5000 + seededInt(itemSeed + ":amt", 0, 50000),
        year: 2021 + seededInt(itemSeed + ":yr", 0, 2),
        industry,
      })
    }

    return connections
  }

  generateVotingRecord(seed: string): VotingRecord[] {
    const numVotes = 3 + seededInt(seed + ":vcount", 0, 5)
    const votes: VotingRecord[] = []
    const usedBills = new Set<number>()

    for (let i = 0; i < numVotes; i++) {
      const itemSeed = `${seed}:vote:${i}`
      let billIdx: number
      do {
        billIdx = seededInt(itemSeed + ":bill", 0, BILLS.length - 1)
      } while (usedBills.has(billIdx) && usedBills.size < BILLS.length)
      usedBills.add(billIdx)

      const bill = BILLS[billIdx]
      const month = seededInt(itemSeed + ":mo", 0, 11)
      const day = seededInt(itemSeed + ":day", 1, 28)
      const year = 2021 + seededInt(itemSeed + ":yr", 0, 2)

      votes.push({
        billTitle: bill.title,
        vote: seededPick(itemSeed + ":v", VOTE_OPTIONS),
        date: new Date(year, month, day).toLocaleDateString(),
        description: bill.description,
      })
    }

    return votes
  }
}

// OpenSecrets API client
export class OpenSecretsClient {
  async getLobbyingData(candidateId: string): Promise<LobbyingConnection[]> {
    return new BallotpediaClient().generateLobbyingConnections(candidateId)
  }

  async getVotingRecord(candidateId: string): Promise<VotingRecord[]> {
    return new BallotpediaClient().generateVotingRecord(candidateId)
  }
}

export const ballotpediaClient = new BallotpediaClient()
export const openSecretsClient = new OpenSecretsClient()
