import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Leaderboard = () => {
  const teams = [
    { rank: 1, name: "VSP team", points: 2450, matches: 24, winRate: 87.5 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Icon name="Trophy" className="text-yellow-400" size={20} />;
      case 2:
        return <Icon name="Medal" className="text-gray-400" size={20} />;
      case 3:
        return <Icon name="Award" className="text-orange-400" size={20} />;
      default:
        return <span className="text-gray-500 font-bold">{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen cs2-bg-pattern">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-white mb-4 cs2-glow">
              ТАБЛИЦА ЛИДЕРОВ
            </h1>
            <p className="text-xl text-gray-300">
              Рейтинг лучших команд Tier 4 Leagues
            </p>
          </div>

          <div className="bg-black/40 rounded-xl cs2-border-glow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500/20 to-red-600/20">
                  <tr>
                    <th className="px-6 py-4 text-left font-oswald font-bold text-orange-400">
                      РЕЙТИНГ
                    </th>
                    <th className="px-6 py-4 text-left font-oswald font-bold text-orange-400">
                      КОМАНДА
                    </th>
                    <th className="px-6 py-4 text-center font-oswald font-bold text-orange-400">
                      ОЧКИ
                    </th>
                    <th className="px-6 py-4 text-center font-oswald font-bold text-orange-400">
                      МАТЧИ
                    </th>
                    <th className="px-6 py-4 text-center font-oswald font-bold text-orange-400">
                      ВИНРЕЙТ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, index) => (
                    <tr
                      key={team.rank}
                      className={`border-b border-gray-700/50 hover:bg-orange-500/5 transition-colors ${
                        index < 3
                          ? "bg-gradient-to-r from-orange-500/5 to-red-600/5"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          {getRankIcon(team.rank)}
                          <span className="font-bold text-white">
                            {team.rank}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                            <Icon
                              name="Shield"
                              size={16}
                              className="text-white"
                            />
                          </div>
                          <span className="font-medium text-white">
                            {team.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-bold text-orange-400">
                          {team.points}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-300">{team.matches}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`font-medium ${
                            team.winRate >= 80
                              ? "text-green-400"
                              : team.winRate >= 70
                                ? "text-yellow-400"
                                : "text-gray-400"
                          }`}
                        >
                          {team.winRate}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">
              Обновлено: {new Date().toLocaleDateString("ru-RU")}
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Icon name="Trophy" size={16} className="text-yellow-400" />
                <span>1 место</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Medal" size={16} className="text-gray-400" />
                <span>2 место</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-orange-400" />
                <span>3 место</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
