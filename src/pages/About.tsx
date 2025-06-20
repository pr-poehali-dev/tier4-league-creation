import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen cs2-bg-pattern">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-white mb-4 cs2-glow">
              О ЛИГЕ
            </h1>
            <p className="text-xl text-gray-300">
              Узнайте больше о Tier 4 Leagues
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-black/40 rounded-xl p-8 cs2-border-glow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <h2 className="font-oswald font-bold text-2xl text-white">
                  Миссия
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Tier 4 Leagues — это первая специализированная киберспортивная
                лига для команд четвертого тира в Counter-Strike 2. Мы создаем
                платформу для развития молодых талантов и команд, которые
                стремятся улучшить свои навыки и перейти на более высокий
                уровень игры.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/40 rounded-xl p-6 border border-blue-500/50">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Users" size={24} className="text-blue-400" />
                  <h3 className="font-oswald font-bold text-xl text-white">
                    Формат лиги
                  </h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Сезонные турниры (3 месяца)</li>
                  <li>• Еженедельные матчи</li>
                  <li>• Групповой этап + плей-офф</li>
                  <li>• До 16 команд в сезоне</li>
                </ul>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-green-500/50">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Gift" size={24} className="text-green-400" />
                  <h3 className="font-oswald font-bold text-xl text-white">
                    Преимущества
                  </h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Призовой фонд каждый сезон</li>
                  <li>• Профессиональные трансляции</li>
                  <li>• Статистика и аналитика</li>
                  <li>• Возможность продвижения</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/40 rounded-xl p-8 border border-orange-500/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <h2 className="font-oswald font-bold text-2xl text-white">
                  Почему именно 4-й тир?
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Команды четвертого тира часто остаются без внимания в крупных
                турнирах. Мы даем им шанс:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Icon
                    name="Trophy"
                    size={32}
                    className="text-orange-400 mx-auto mb-2"
                  />
                  <p className="text-white font-medium">Показать себя</p>
                </div>
                <div className="text-center">
                  <Icon
                    name="TrendingUp"
                    size={32}
                    className="text-blue-400 mx-auto mb-2"
                  />
                  <p className="text-white font-medium">Развиваться</p>
                </div>
                <div className="text-center">
                  <Icon
                    name="Users"
                    size={32}
                    className="text-green-400 mx-auto mb-2"
                  />
                  <p className="text-white font-medium">Найти команду</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-xl p-8 cs2-border-glow text-center">
              <h2 className="font-oswald font-bold text-2xl text-white mb-4">
                Присоединяйтесь к нашему сообществу
              </h2>
              <p className="text-gray-300 mb-6">
                Станьте частью растущего киберспортивного движения
              </p>
              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">50+</div>
                  <div className="text-sm text-gray-400">Команд</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">300+</div>
                  <div className="text-sm text-gray-400">Игроков</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">100+</div>
                  <div className="text-sm text-gray-400">Матчей</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
