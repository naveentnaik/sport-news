import i4 from "../assets/ClubRankings/i4.png";

const ClubRankings = ({ rankingsData = defaultRankingsData }) => {
  return (
    <div >
      <h3 className="text-2xl font-semibold mb-4">Club Rankings</h3>
      <div className="px-4 pb-1 pt-1 bg-[#EBEEF3] rounded">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-2 text-left text-sm font-semibold">Club</th>
              {tableHeaders.map((header) => (
                <th key={header.key} className="p-2 text-sm font-semibold text-center">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rankingsData.map((club, index) => (
               <tr
               key={club.name}
               className={`border-b border-gray-300 ${
                 index === rankingsData.length - 1 ? "border-none" : ""
               }`}
             >
                 <td className="p-2 flex items-center text-xs font-semibold">
                  <span className="mr-2">{index + 1}</span>
                  <img src={i4} alt="Club Icon" className="w-5 h-5 mr-2" />
                  {club.name}
                </td>
                {tableHeaders.map((header) => (
                  <td key={header.key} className="p-2 text-center text-xs ">
                    {club[header.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
  
// Table column definitions
const tableHeaders = [
  { key: 'matchesPlayed', label: 'MP' },
  { key: 'wins', label: 'W' },
  { key: 'draws', label: 'D' },
  { key: 'losses', label: 'L' },
  { key: 'goalsFor', label: 'F' },
  { key: 'goalsAgainst', label: 'A' },
  { key: 'goalDifference', label: 'GD' }
];
  
// Default data if none is provided
const defaultRankingsData = [
  {
    name: 'Manchester City',
    matchesPlayed: 38,
    wins: 29,
    draws: 5,
    losses: 4,
    goalsFor: 95,
    goalsAgainst: 35,
    goalDifference: 73
  },
  {
    name: 'Liverpool',
    matchesPlayed: 38,
    wins: 28,
    draws: 6,
    losses: 4,
    goalsFor: 89,
    goalsAgainst: 35,
    goalDifference: 66
  },
  {
    name: 'Chelsea',
    matchesPlayed: 38,
    wins: 21,
    draws: 9,
    losses: 8,
    goalsFor: 76,
    goalsAgainst: 35,
    goalDifference: 43
  },
  {
    name: 'Tottenham Hotspur',
    matchesPlayed: 38,
    wins: 20,
    draws: 5,
    losses: 13,
    goalsFor: 69,
    goalsAgainst: 40,
    goalDifference: 29
  },
  {
    name: 'Arsenal',
    matchesPlayed: 38,
    wins: 22,
    draws: 3,
    losses: 13,
    goalsFor: 61,
    goalsAgainst: 48,
    goalDifference: 13
  },
  {
    name: 'Manchester United',
    matchesPlayed: 38,
    wins: 16,
    draws: 10,
    losses: 12,
    goalsFor: 57,
    goalsAgainst: 57,
    goalDifference: 0
  }
];
  
export default ClubRankings;