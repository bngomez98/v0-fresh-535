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

  // Additional major metro areas and states

  // Pennsylvania
  "19101": {
    state: "PA",
    district: 3,
    senators: [
      { name: "Bob Casey", party: "D", incumbent: true, yearsInOffice: 18 },
      { name: "John Fetterman", party: "D", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Dwight Evans", party: "D", incumbent: true, yearsInOffice: 8 },
      { name: "James Jones", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "15201": {
    state: "PA",
    district: 12,
    senators: [
      { name: "Bob Casey", party: "D", incumbent: true, yearsInOffice: 18 },
      { name: "John Fetterman", party: "D", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Summer Lee", party: "D", incumbent: true, yearsInOffice: 2 },
      { name: "Mike Doyle", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Ohio
  "43201": {
    state: "OH",
    district: 3,
    senators: [
      { name: "Sherrod Brown", party: "D", incumbent: true, yearsInOffice: 18 },
      { name: "J.D. Vance", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Joyce Beatty", party: "D", incumbent: true, yearsInOffice: 12 },
      { name: "Derrick Seaver", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "44101": {
    state: "OH",
    district: 11,
    senators: [
      { name: "Sherrod Brown", party: "D", incumbent: true, yearsInOffice: 18 },
      { name: "J.D. Vance", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Shontel Brown", party: "D", incumbent: true, yearsInOffice: 3 },
      { name: "Eric Brewer", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "45201": {
    state: "OH",
    district: 1,
    senators: [
      { name: "Sherrod Brown", party: "D", incumbent: true, yearsInOffice: 18 },
      { name: "J.D. Vance", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Greg Landsman", party: "D", incumbent: true, yearsInOffice: 2 },
      { name: "Orlando Sonza", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Michigan
  "48201": {
    state: "MI",
    district: 13,
    senators: [
      { name: "Debbie Stabenow", party: "D", incumbent: true, yearsInOffice: 24 },
      { name: "Gary Peters", party: "D", incumbent: true, yearsInOffice: 10 },
    ],
    representatives: [
      { name: "Shri Thanedar", party: "D", incumbent: true, yearsInOffice: 2 },
      { name: "Martell Bivings", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Massachusetts
  "02101": {
    state: "MA",
    district: 8,
    senators: [
      { name: "Elizabeth Warren", party: "D", incumbent: true, yearsInOffice: 12 },
      { name: "Ed Markey", party: "D", incumbent: true, yearsInOffice: 11 },
    ],
    representatives: [
      { name: "Stephen Lynch", party: "D", incumbent: true, yearsInOffice: 22 },
      { name: "Robert Burke", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // North Carolina
  "27601": {
    state: "NC",
    district: 2,
    senators: [
      { name: "Thom Tillis", party: "R", incumbent: true, yearsInOffice: 10 },
      { name: "Ted Budd", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Deborah Ross", party: "D", incumbent: true, yearsInOffice: 4 },
      { name: "Alan Swain", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "28201": {
    state: "NC",
    district: 12,
    senators: [
      { name: "Thom Tillis", party: "R", incumbent: true, yearsInOffice: 10 },
      { name: "Ted Budd", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Alma Adams", party: "D", incumbent: true, yearsInOffice: 10 },
      { name: "Tyler Lee", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Tennessee
  "37201": {
    state: "TN",
    district: 5,
    senators: [
      { name: "Marsha Blackburn", party: "R", incumbent: true, yearsInOffice: 6 },
      { name: "Bill Hagerty", party: "R", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Andy Ogles", party: "R", incumbent: true, yearsInOffice: 2 },
      { name: "Heidi Campbell", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "38101": {
    state: "TN",
    district: 9,
    senators: [
      { name: "Marsha Blackburn", party: "R", incumbent: true, yearsInOffice: 6 },
      { name: "Bill Hagerty", party: "R", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Steve Cohen", party: "D", incumbent: true, yearsInOffice: 17 },
      { name: "Charlotte Bergmann", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Indiana
  "46201": {
    state: "IN",
    district: 7,
    senators: [
      { name: "Todd Young", party: "R", incumbent: true, yearsInOffice: 8 },
      { name: "Mike Braun", party: "R", incumbent: true, yearsInOffice: 6 },
    ],
    representatives: [
      { name: "Andre Carson", party: "D", incumbent: true, yearsInOffice: 16 },
      { name: "John Schmitz", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Missouri
  "63101": {
    state: "MO",
    district: 1,
    senators: [
      { name: "Josh Hawley", party: "R", incumbent: true, yearsInOffice: 6 },
      { name: "Eric Schmitt", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Cori Bush", party: "D", incumbent: true, yearsInOffice: 4 },
      { name: "Andrew Jones", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "64101": {
    state: "MO",
    district: 5,
    senators: [
      { name: "Josh Hawley", party: "R", incumbent: true, yearsInOffice: 6 },
      { name: "Eric Schmitt", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Emanuel Cleaver", party: "D", incumbent: true, yearsInOffice: 20 },
      { name: "Sean Smith", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Wisconsin
  "53201": {
    state: "WI",
    district: 4,
    senators: [
      { name: "Ron Johnson", party: "R", incumbent: true, yearsInOffice: 14 },
      { name: "Tammy Baldwin", party: "D", incumbent: true, yearsInOffice: 12 },
    ],
    representatives: [
      { name: "Gwen Moore", party: "D", incumbent: true, yearsInOffice: 20 },
      { name: "Tim Rogers", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },
  "53701": {
    state: "WI",
    district: 2,
    senators: [
      { name: "Ron Johnson", party: "R", incumbent: true, yearsInOffice: 14 },
      { name: "Tammy Baldwin", party: "D", incumbent: true, yearsInOffice: 12 },
    ],
    representatives: [
      { name: "Mark Pocan", party: "D", incumbent: true, yearsInOffice: 12 },
      { name: "Peter Theron", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Minnesota
  "55401": {
    state: "MN",
    district: 5,
    senators: [
      { name: "Amy Klobuchar", party: "D", incumbent: true, yearsInOffice: 18 },
      { name: "Tina Smith", party: "D", incumbent: true, yearsInOffice: 7 },
    ],
    representatives: [
      { name: "Ilhan Omar", party: "D", incumbent: true, yearsInOffice: 6 },
      { name: "Cicely Davis", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Nevada
  "89101": {
    state: "NV",
    district: 1,
    senators: [
      { name: "Catherine Cortez Masto", party: "D", incumbent: true, yearsInOffice: 8 },
      { name: "Jacky Rosen", party: "D", incumbent: true, yearsInOffice: 6 },
    ],
    representatives: [
      { name: "Dina Titus", party: "D", incumbent: true, yearsInOffice: 15 },
      { name: "Mark Robertson", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Oregon
  "97201": {
    state: "OR",
    district: 3,
    senators: [
      { name: "Ron Wyden", party: "D", incumbent: true, yearsInOffice: 28 },
      { name: "Jeff Merkley", party: "D", incumbent: true, yearsInOffice: 16 },
    ],
    representatives: [
      { name: "Earl Blumenauer", party: "D", incumbent: true, yearsInOffice: 27 },
      { name: "Joanna Harbour", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // New Jersey
  "07101": {
    state: "NJ",
    district: 10,
    senators: [
      { name: "Cory Booker", party: "D", incumbent: true, yearsInOffice: 11 },
      { name: "Bob Menendez", party: "D", incumbent: true, yearsInOffice: 18 },
    ],
    representatives: [
      { name: "LaMonica McIver", party: "D", incumbent: true, yearsInOffice: 1 },
      { name: "Carmen Bucco", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Maryland
  "21201": {
    state: "MD",
    district: 7,
    senators: [
      { name: "Ben Cardin", party: "D", incumbent: true, yearsInOffice: 18 },
      { name: "Chris Van Hollen", party: "D", incumbent: true, yearsInOffice: 8 },
    ],
    representatives: [
      { name: "Kweisi Mfume", party: "D", incumbent: true, yearsInOffice: 4 },
      { name: "Scott Collier", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // South Carolina
  "29401": {
    state: "SC",
    district: 1,
    senators: [
      { name: "Lindsey Graham", party: "R", incumbent: true, yearsInOffice: 22 },
      { name: "Tim Scott", party: "R", incumbent: true, yearsInOffice: 12 },
    ],
    representatives: [
      { name: "Nancy Mace", party: "R", incumbent: true, yearsInOffice: 4 },
      { name: "Annie Andrews", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Louisiana
  "70112": {
    state: "LA",
    district: 2,
    senators: [
      { name: "Bill Cassidy", party: "R", incumbent: true, yearsInOffice: 10 },
      { name: "John Kennedy", party: "R", incumbent: true, yearsInOffice: 8 },
    ],
    representatives: [
      { name: "Troy Carter", party: "D", incumbent: true, yearsInOffice: 3 },
      { name: "Desiree Ontiveros", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Kentucky
  "40201": {
    state: "KY",
    district: 3,
    senators: [
      { name: "Mitch McConnell", party: "R", incumbent: true, yearsInOffice: 39 },
      { name: "Rand Paul", party: "R", incumbent: true, yearsInOffice: 14 },
    ],
    representatives: [
      { name: "Morgan McGarvey", party: "D", incumbent: true, yearsInOffice: 2 },
      { name: "Stuart Ray", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Oklahoma
  "73101": {
    state: "OK",
    district: 5,
    senators: [
      { name: "James Lankford", party: "R", incumbent: true, yearsInOffice: 10 },
      { name: "Markwayne Mullin", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Stephanie Bice", party: "R", incumbent: true, yearsInOffice: 4 },
      { name: "Joshua Harris-Till", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Connecticut
  "06101": {
    state: "CT",
    district: 1,
    senators: [
      { name: "Richard Blumenthal", party: "D", incumbent: true, yearsInOffice: 14 },
      { name: "Chris Murphy", party: "D", incumbent: true, yearsInOffice: 12 },
    ],
    representatives: [
      { name: "John Larson", party: "D", incumbent: true, yearsInOffice: 25 },
      { name: "Jim Griffin", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Iowa
  "50301": {
    state: "IA",
    district: 3,
    senators: [
      { name: "Chuck Grassley", party: "R", incumbent: true, yearsInOffice: 44 },
      { name: "Joni Ernst", party: "R", incumbent: true, yearsInOffice: 10 },
    ],
    representatives: [
      { name: "Zach Nunn", party: "R", incumbent: true, yearsInOffice: 2 },
      { name: "Lanon Baccam", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Arkansas
  "72201": {
    state: "AR",
    district: 2,
    senators: [
      { name: "John Boozman", party: "R", incumbent: true, yearsInOffice: 14 },
      { name: "Tom Cotton", party: "R", incumbent: true, yearsInOffice: 10 },
    ],
    representatives: [
      { name: "French Hill", party: "R", incumbent: true, yearsInOffice: 10 },
      { name: "Marcus Jones", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Kansas
  "66101": {
    state: "KS",
    district: 3,
    senators: [
      { name: "Jerry Moran", party: "R", incumbent: true, yearsInOffice: 14 },
      { name: "Roger Marshall", party: "R", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Sharice Davids", party: "D", incumbent: true, yearsInOffice: 6 },
      { name: "Prasanth Reddy", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // New Mexico
  "87101": {
    state: "NM",
    district: 1,
    senators: [
      { name: "Martin Heinrich", party: "D", incumbent: true, yearsInOffice: 12 },
      { name: "Ben Ray Luján", party: "D", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Melanie Stansbury", party: "D", incumbent: true, yearsInOffice: 3 },
      { name: "Michelle Garcia Holmes", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Nebraska
  "68101": {
    state: "NE",
    district: 2,
    senators: [
      { name: "Deb Fischer", party: "R", incumbent: true, yearsInOffice: 12 },
      { name: "Pete Ricketts", party: "R", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Don Bacon", party: "R", incumbent: true, yearsInOffice: 8 },
      { name: "Tony Vargas", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // West Virginia
  "25301": {
    state: "WV",
    district: 1,
    senators: [
      { name: "Joe Manchin", party: "D", incumbent: true, yearsInOffice: 15 },
      { name: "Shelley Moore Capito", party: "R", incumbent: true, yearsInOffice: 10 },
    ],
    representatives: [
      { name: "Carol Miller", party: "R", incumbent: true, yearsInOffice: 6 },
      { name: "Lacy Watson", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Idaho
  "83701": {
    state: "ID",
    district: 1,
    senators: [
      { name: "Mike Crapo", party: "R", incumbent: true, yearsInOffice: 24 },
      { name: "Jim Risch", party: "R", incumbent: true, yearsInOffice: 16 },
    ],
    representatives: [
      { name: "Russ Fulcher", party: "R", incumbent: true, yearsInOffice: 6 },
      { name: "Kaylee Peterson", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // New Hampshire
  "03101": {
    state: "NH",
    district: 1,
    senators: [
      { name: "Jeanne Shaheen", party: "D", incumbent: true, yearsInOffice: 15 },
      { name: "Maggie Hassan", party: "D", incumbent: true, yearsInOffice: 8 },
    ],
    representatives: [
      { name: "Chris Pappas", party: "D", incumbent: true, yearsInOffice: 6 },
      { name: "Russell Prescott", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Maine
  "04101": {
    state: "ME",
    district: 1,
    senators: [
      { name: "Susan Collins", party: "R", incumbent: true, yearsInOffice: 28 },
      { name: "Angus King", party: "I", incumbent: true, yearsInOffice: 12 },
    ],
    representatives: [
      { name: "Chellie Pingree", party: "D", incumbent: true, yearsInOffice: 16 },
      { name: "Ed Thelander", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Rhode Island
  "02901": {
    state: "RI",
    district: 1,
    senators: [
      { name: "Jack Reed", party: "D", incumbent: true, yearsInOffice: 27 },
      { name: "Sheldon Whitehouse", party: "D", incumbent: true, yearsInOffice: 18 },
    ],
    representatives: [
      { name: "David Cicilline", party: "D", incumbent: true, yearsInOffice: 13 },
      { name: "Allen Waters", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Montana
  "59601": {
    state: "MT",
    district: 1,
    senators: [
      { name: "Jon Tester", party: "D", incumbent: true, yearsInOffice: 18 },
      { name: "Steve Daines", party: "R", incumbent: true, yearsInOffice: 10 },
    ],
    representatives: [
      { name: "Ryan Zinke", party: "R", incumbent: true, yearsInOffice: 2 },
      { name: "Monica Tranel", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Delaware
  "19901": {
    state: "DE",
    district: 1,
    senators: [
      { name: "Tom Carper", party: "D", incumbent: true, yearsInOffice: 23 },
      { name: "Chris Coons", party: "D", incumbent: true, yearsInOffice: 14 },
    ],
    representatives: [
      { name: "Lisa Blunt Rochester", party: "D", incumbent: true, yearsInOffice: 8 },
      { name: "Lee Murphy", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // South Dakota
  "57101": {
    state: "SD",
    district: 1,
    senators: [
      { name: "John Thune", party: "R", incumbent: true, yearsInOffice: 20 },
      { name: "Mike Rounds", party: "R", incumbent: true, yearsInOffice: 10 },
    ],
    representatives: [
      { name: "Dusty Johnson", party: "R", incumbent: true, yearsInOffice: 6 },
      { name: "Sheryl Johnson", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // North Dakota
  "58501": {
    state: "ND",
    district: 1,
    senators: [
      { name: "John Hoeven", party: "R", incumbent: true, yearsInOffice: 14 },
      { name: "Kevin Cramer", party: "R", incumbent: true, yearsInOffice: 6 },
    ],
    representatives: [
      { name: "Kelly Armstrong", party: "R", incumbent: true, yearsInOffice: 6 },
      { name: "Cara Mund", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Vermont
  "05601": {
    state: "VT",
    district: 1,
    senators: [
      { name: "Bernie Sanders", party: "I", incumbent: true, yearsInOffice: 18 },
      { name: "Peter Welch", party: "D", incumbent: true, yearsInOffice: 2 },
    ],
    representatives: [
      { name: "Becca Balint", party: "D", incumbent: true, yearsInOffice: 2 },
      { name: "Liam Madden", party: "I", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Wyoming
  "82001": {
    state: "WY",
    district: 1,
    senators: [
      { name: "John Barrasso", party: "R", incumbent: true, yearsInOffice: 17 },
      { name: "Cynthia Lummis", party: "R", incumbent: true, yearsInOffice: 4 },
    ],
    representatives: [
      { name: "Harriet Hageman", party: "R", incumbent: true, yearsInOffice: 2 },
      { name: "Lynnette Grey Bull", party: "D", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Hawaii
  "96801": {
    state: "HI",
    district: 1,
    senators: [
      { name: "Brian Schatz", party: "D", incumbent: true, yearsInOffice: 12 },
      { name: "Mazie Hirono", party: "D", incumbent: true, yearsInOffice: 12 },
    ],
    representatives: [
      { name: "Ed Case", party: "D", incumbent: true, yearsInOffice: 6 },
      { name: "Steve Bond", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Mississippi
  "39201": {
    state: "MS",
    district: 2,
    senators: [
      { name: "Roger Wicker", party: "R", incumbent: true, yearsInOffice: 16 },
      { name: "Cindy Hyde-Smith", party: "R", incumbent: true, yearsInOffice: 6 },
    ],
    representatives: [
      { name: "Bennie Thompson", party: "D", incumbent: true, yearsInOffice: 31 },
      { name: "Ronald Eller", party: "R", incumbent: false, yearsInOffice: 0 },
    ],
  },

  // Utah
  "84101": {
    state: "UT",
    district: 2,
    senators: [
      { name: "Mike Lee", party: "R", incumbent: true, yearsInOffice: 14 },
      { name: "Mitt Romney", party: "R", incumbent: true, yearsInOffice: 6 },
    ],
    representatives: [
      { name: "Chris Stewart", party: "R", incumbent: true, yearsInOffice: 12 },
      { name: "Nathaniel Woodward", party: "D", incumbent: false, yearsInOffice: 0 },
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
