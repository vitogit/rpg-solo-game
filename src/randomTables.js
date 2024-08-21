// randomTables.js
export const genericTables = {
  level: Array.from({ length: 6 }, (_, i) => i + 1),
  difficulty: Array.from({ length: 6 }, (_, i) => i + 1),
  complication: ['Ambush','Critical Failure','Lost Resources', 'Allies in danger', 'Environmental Hazard', 'Time Crunch', 'Betrayal', 'Innocents at risk', 'Moral Dilemma', 'Increased danger', 'Trap'],
}
export const randomTables = {
  'James Bond': {
    area: ['London', 'Moscow', 'Paris', 'Berlin', 'Rome', 'Tokyo', 'New York', 'Rio de Janeiro', 'Cairo', 'Hong Kong', 'Istanbul', 'Sydney'],
    location: ['MI6 Headquarters', 'Casino', 'Main Square', 'Museum', 'Hotel', 'Train Station', 'Airport', 'Subway', 'Harbor', 'Embassy', 'Bank', 'Hospital'],
    goal: ['Retrieve Data', 'Rescue Hostage', 'Destroy Target', 'Sabotage Facility', 'Locate Artifact', 'Escort VIP', 'Infiltrate Area', 'Establish Contact', 'Intercept Shipment', 'Defend Position', 'Gather Intel'],
    challenge: ['Security', 'Guards', 'Police', 'Thugs', 'Snipers', 'Assassins', 'Spies', 'Thieves', 'Terror', 'Sabotage', 'Betrayal', 'Double Agent'],
    reward: ['Money', 'Weapon', 'Gadget', 'Vehicle', 'Information', 'Artifact', 'Contacts', 'Safehouse', 'Equipment', 'Medicine', 'Passport', 'Immunity'],
    minorCharacter: ['Millionare', 'Politician', 'Scientist', 'Journalist', 'Artist', 'Athlete', 'Celebrity', 'Criminal', 'Spy', 'Soldier', 'Pilot', 'Engineer'],
    majorCharacter: ['Q', 'M', 'Moneypenny', 'Felix Leiter', 'Blofeld', 'Oddjob', 'Jaws', 'Goldfinger', 'Dr. No', 'Scaramanga', 'Red Grant', 'Rosa Klebb'],
    minorEncounter: ['Car Chase', 'Foot Chase', 'Gunfight', 'Knife Fight', 'Explosion', 'Firefight', 'Bar Fight', 'Boat Chase', 'Helicopter Chase', 'Motorcycle Chase', 'Plane Chase', 'Train Chase'],
  },
  'Sherlock Holmes': {
    area: ['London', 'Paris', 'Berlin', 'Rome', 'Vienna', 'Madrid', 'Moscow', 'Athens', 'Istanbul', 'Cairo', 'Dublin', 'Stockholm'],
    location: ['Baker Street', 'Docks', 'Slums', 'Mansion', 'Hotel', 'Museum', 'Theater', 'Cafe', 'Library', 'Park', 'Church', 'Cemetery'],
    goal: ['Solve Crime', 'Find Missing Person', 'Recover Stolen Item', 'Clear Name', 'Uncover Conspiracy', 'Stop Blackmail', 'Prevent assesination', 'Locate Heir', 'Rescue Hostage', 'Capture Criminal', 'Protect Witness', 'Defend Innocent'],
    challenge: ['Mystery', 'Time crunch', 'Red herring', 'Betrayal', 'Blackmail', 'Double agent', 'Sabotage', 'Innocent accused', 'Kidnapping', 'Threat', 'Conspiracy', 'Revenge'],
    reward: ['Money', 'Fame', 'Information', 'Artifact', 'Contacts', 'Safehouse', 'Equipment', 'Medicine', 'Passport', 'Immunity', 'Justice', 'Peace'],
    minorCharacter: ['Doctor', 'Inspector', 'Journalist', 'Artist', 'Athlete', 'Celebrity', 'Criminal', 'Spy', 'Soldier', 'Pilot', 'Engineer', 'Politician'],
    majorCharacter: ['Watson', 'Mycroft', 'Irene Adler', 'Moriarty', 'Lestrade', 'Mrs. Hudson', 'Mary Morstan', 'Mrs. Watson', 'Violet Hunter', 'Gregson', 'Stapleton', 'Baron Gruner'],
  },
  'Star Wars': {
    area: ['Tatooine', 'Coruscant', 'Naboo', 'Hoth', 'Endor', 'Kashyyyk', 'Dagobah', 'Bespin', 'Kamino', 'Geonosis', 'Mustafar', 'Jakku'],
    location: ['Cantina', 'Old Temple', 'Palace', 'Spaceport', 'Forest', 'Desert', 'Swamp', 'Mountains', 'City', 'Underwater', 'Volcano', 'Jungle'],
    goal: ['Rescue Hostage', 'Destroy Target', 'Sabotage Facility', 'Locate Artifact', 'Escort VIP', 'Infiltrate Area', 'Establish Contact', 'Intercept Shipment', 'Defend Position', 'Gather Intel', 'Retrieve Data', 'Protect Asset'],
    challenge: ['Stormtroopers', 'Bounty Hunters', 'Droids', 'Security System', 'Rebels', 'Empire', 'Technical Difficulty', 'Pirates', 'Hutts', 'Negotiation'],
    reward: ['Money', 'Weapon', 'Gadget', 'Vehicle', 'Information', 'Artifact', 'Contacts', 'Safehouse', 'Equipment', 'Medicine', 'Passport', 'Immunity'],
    minorCharacter: ['Smuggler', 'Bounty Hunter', 'Pilot', 'Alien', 'Droid', 'Rebel', 'Empire', 'First Order', 'Resistance', 'Hutt'],
    majorCharacter: ['Luke Skywalker', 'Leia Organa', 'Han Solo', 'Chewbacca', 'Obi-Wan Kenobi', 'Darth Vader', 'Emperor Palpatine', 'Yoda', 'Mace Windu', 'Qui-Gon Jinn', 'Rey', 'Kylo Ren'],
  },
};
