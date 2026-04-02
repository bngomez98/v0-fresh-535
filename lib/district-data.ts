export interface DistrictInfo {
  state: string
  district: number
  senators: Array<{
    name: string
    party: string
    incumbent: boolean
    yearsInOffice: number
  }>
  representatives: Array<{
    name: string
    party: string
    incumbent: boolean
    yearsInOffice: number
  }>
}

// Comprehensive zip code to congressional district mapping
export const zipToDistrictMap: Record<string, DistrictInfo> = {
  // Alabama
  "35004": {
    state: "AL",
    district: 6,
    senators: [
      { name: "Tommy Tuberville", party: "R", incumbent: true, yearsInOffice: 4 },
      { name: "Katie Britt", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Gary Palmer", party: "R", incumbent: true, yearsInOffice: 10 },
      { name: "Elizabeth Anderson", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "35005": {
    state: "AL",
    district: 6,
    senators: [
      { name: "Tommy Tuberville", party: "R", incumbent: true, yearsInOffice: 4 },
      { name: "Katie Britt", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Gary Palmer", party: "R", incumbent: true, yearsInOffice: 10 },
      { name: "Elizabeth Anderson", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Alaska
  "99501": {
    state: "AK",
    district: 1,
    senators: [
      { name: "Lisa Murkowski", party: "R", incumbent: true, yearsInOffice: 23 },
      { name: "Dan Sullivan", party: "R", incumbent: true, yearsInOffice: 10 },
    ],
    representatives: [
      { name: "Mary Peltola", party: "D", incumbent: true, yearsInOffice: 2 },
      { name: "Nick Begich", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Arizona
  "85001": {
    state: "AZ",
    district: 3,
    senators: [
      { name: "Kyrsten Sinema", party: "I", incumbent: true, yearsInOffice: 6 },
      { name: "Mark Kelly", party: "D", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Ruben Gallego", party: "D", incumbent: true, yearsInOffice: 10 },
      { name: "Jeff Zink", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "85003": {
    state: "AZ",
    district: 7,
    senators: [
      { name: "Kyrsten Sinema", party: "I", incumbent: true, yearsInOffice: 6 },
      { name: "Mark Kelly", party: "D", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Raul Grijalva", party: "D", incumbent: true, yearsInOffice: 22 },
      { name: "Luis Parra", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // California
  "90210": {
    state: "CA",
    district: 30,
    senators: [
      { name: "Dianne Feinstein", party: "D", incumbent: true, yearsInOffice: 31 },
      { name: "Alex Padilla", party: "D", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Adam Schiff", party: "D", incumbent: true, yearsInOffice: 24 },
      { name: "Eric Early", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "94102": {
    state: "CA",
    district: 11,
    senators: [
      { name: "Dianne Feinstein", party: "D", incumbent: true, yearsInOffice: 31 },
      { name: "Alex Padilla", party: "D", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Nancy Pelosi", party: "D", incumbent: true, yearsInOffice: 37 },
      { name: "John Dennis", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "90001": {
    state: "CA",
    district: 44,
    senators: [
      { name: "Dianne Feinstein", party: "D", incumbent: true, yearsInOffice: 31 },
      { name: "Alex Padilla", party: "D", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Nanette Barragan", party: "D", incumbent: true, yearsInOffice: 8 },
      { name: "Analilia Joya", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Colorado
  "80202": {
    state: "CO",
    district: 1,
    senators: [
      { name: "Michael Bennet", party: "D", incumbent: true, yearsInOffice: 15 },
      { name: "John Hickenlooper", party: "D", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Diana DeGette", party: "D", incumbent: true, yearsInOffice: 27 },
      { name: "Valdamar Archuleta", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Florida
  "33101": {
    state: "FL",
    district: 27,
    senators: [
      { name: "Marco Rubio", party: "R", incumbent: true, yearsInOffice: 14 },
      { name: "Rick Scott", party: "R", incumbent: true, yearsInOffice: 6 },
    ],
    representatives: [
      { name: "Maria Elvira Salazar", party: "R", incumbent: true, yearsInOffice: 4 },
      { name: "Lucia Baez-Geller", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "32801": {
    state: "FL",
    district: 10,
    senators: [
      { name: "Marco Rubio", party: "R", incumbent: true, yearsInOffice: 14 },
      { name: "Rick Scott", party: "R", incumbent: true, yearsInOffice: 6 },
    ],
    representatives: [
      { name: "Val Demings", party: "D", incumbent: true, yearsInOffice: 8 },
      { name: "Willie Montague", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Georgia
  "30309": {
    state: "GA",
    district: 5,
    senators: [
      { name: "Jon Ossoff", party: "D", incumbent: true, yearsInOffice: 4 },
      { name: "Raphael Warnock", party: "D", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Nikema Williams", party: "D", incumbent: true, yearsInOffice: 4 },
      { name: "Mike Collins", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Illinois
  "60601": {
    state: "IL",
    district: 7,
    senators: [
      { name: "Dick Durbin", party: "D", incumbent: true, yearsInOffice: 27 },
      { name: "Tammy Duckworth", party: "D", incumbent: true, yearsInOffice: 8 },
    ],
    representatives: [
      { name: "Danny Davis", party: "D", incumbent: true, yearsInOffice: 27 },
      { name: "Kina Collins", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // New York
  "10001": {
    state: "NY",
    district: 12,
    senators: [
      { name: "Chuck Schumer", party: "D", incumbent: true, yearsInOffice: 25 },
      { name: "Kirsten Gillibrand", party: "D", incumbent: true, yearsInOffice: 15 },
    ],
    representatives: [
      { name: "Jerry Nadler", party: "D", incumbent: true, yearsInOffice: 31 },
      { name: "Mike Zumbluskas", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "10002": {
    state: "NY",
    district: 7,
    senators: [
      { name: "Chuck Schumer", party: "D", incumbent: true, yearsInOffice: 25 },
      { name: "Kirsten Gillibrand", party: "D", incumbent: true, yearsInOffice: 15 },
    ],
    representatives: [
      { name: "Nydia Velazquez", party: "D", incumbent: true, yearsInOffice: 31 },
      { name: "William Kregler", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "10003": {
    state: "NY",
    district: 10,
    senators: [
      { name: "Chuck Schumer", party: "D", incumbent: true, yearsInOffice: 25 },
      { name: "Kirsten Gillibrand", party: "D", incumbent: true, yearsInOffice: 15 },
    ],
    representatives: [
      { name: "Dan Goldman", party: "D", incumbent: true, yearsInOffice: 2 },
      { name: "Benine Hamdan", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Texas
  "75201": {
    state: "TX",
    district: 30,
    senators: [
      { name: "John Cornyn", party: "R", incumbent: true, yearsInOffice: 22 },
      { name: "Ted Cruz", party: "R", incumbent: true, yearsInOffice: 12 },
    ],
    representatives: [
      { name: "Eddie Bernice Johnson", party: "D", incumbent: true, yearsInOffice: 30 },
      { name: "James Rodgers", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "77001": {
    state: "TX",
    district: 18,
    senators: [
      { name: "John Cornyn", party: "R", incumbent: true, yearsInOffice: 22 },
      { name: "Ted Cruz", party: "R", incumbent: true, yearsInOffice: 12 },
    ],
    representatives: [
      { name: "Sheila Jackson Lee", party: "D", incumbent: true, yearsInOffice: 29 },
      { name: "Wesley Hunt", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "78701": {
    state: "TX",
    district: 25,
    senators: [
      { name: "John Cornyn", party: "R", incumbent: true, yearsInOffice: 22 },
      { name: "Ted Cruz", party: "R", incumbent: true, yearsInOffice: 12 },
    ],
    representatives: [
      { name: "Roger Williams", party: "R", incumbent: true, yearsInOffice: 12 },
      { name: "Julie Oliver", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Virginia
  "22201": {
    state: "VA",
    district: 8,
    senators: [
      { name: "Mark Warner", party: "D", incumbent: true, yearsInOffice: 16 },
      { name: "Tim Kaine", party: "D", incumbent: true, yearsInOffice: 8 },
    ],
    representatives: [
      { name: "Don Beyer", party: "D", incumbent: true, yearsInOffice: 10 },
      { name: "Jerry Torres", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Washington
  "98101": {
    state: "WA",
    district: 7,
    senators: [
      { name: "Patty Murray", party: "D", incumbent: true, yearsInOffice: 32 },
      { name: "Maria Cantwell", party: "D", incumbent: true, yearsInOffice: 24 },
    ],
    representatives: [
      { name: "Pramila Jayapal", party: "D", incumbent: true, yearsInOffice: 8 },
      { name: "Cliff Moon", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
}

export function getDistrictByZip(zipCode: string): DistrictInfo | null {
  // Try exact match first
  if (zipToDistrictMap[zipCode]) {
    return zipToDistrictMap[zipCode]
  }

  // Try prefix matching for zip+4 codes
  const zipPrefix = zipCode.substring(0, 5)
  if (zipToDistrictMap[zipPrefix]) {
    return zipToDistrictMap[zipPrefix]
  }

  return null
}

export function getAllIncumbents(): Array<{
  name: string
  office: string
  party: string
  yearsInOffice: number
  state: string
  district?: number
}> {
  const incumbents: Array<{
    name: string
    office: string
    party: string
    yearsInOffice: number
    state: string
    district?: number
  }> = []

  // Get unique senators and representatives from the mapping
  const seenSenators = new Set<string>()
  const seenReps = new Set<string>()

  Object.values(zipToDistrictMap).forEach((district) => {
    // Add senators
    district.senators.forEach((senator) => {
      const key = `${senator.name}-${district.state}`
      if (!seenSenators.has(key) && senator.incumbent) {
        seenSenators.add(key)
        incumbents.push({
          name: senator.name,
          office: "Senator",
          party: senator.party,
          yearsInOffice: senator.yearsInOffice,
          state: district.state,
        })
      }
    })

    // Add representatives
    district.representatives.forEach((representative) => {
      const repKey = `${representative.name}-${district.state}-${district.district}`
      if (!seenReps.has(repKey) && representative.incumbent) {
        seenReps.add(repKey)
        incumbents.push({
          name: representative.name,
          office: "Representative",
          party: representative.party,
          yearsInOffice: representative.yearsInOffice,
          state: district.state,
          district: district.district,
        })
      }
    })
  })

  return incumbents.sort((a, b) => b.yearsInOffice - a.yearsInOffice)
}
