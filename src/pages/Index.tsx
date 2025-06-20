import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen cs2-bg-pattern">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className="relative">
            <h1 className="font-oswald font-bold text-5xl md:text-7xl text-white mb-6 cs2-glow">
              TIER 4 LEAGUES
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Первая киберспортивная лига для команд 4-го тира в Counter-Strike
              2
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg cs2-border-glow">
                <Icon name="Send" size={20} className="mr-2" />
                Присоединиться @VSPteam
              </Button>
              <Link to="/leaderboard">
                <Button
                  variant="outline"
                  className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 py-3 px-8"
                >
                  <Icon name="Trophy" size={20} className="mr-2" />
                  Таблица лидеров
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 p-6 rounded-xl cs2-border-glow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="font-oswald font-bold text-xl text-white mb-3">
                Для команд 4-го тира
              </h3>
              <p className="text-gray-400">
                Специально созданная лига для развивающихся команд
                Counter-Strike 2
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-blue-500/50">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Calendar" size={24} className="text-white" />
              </div>
              <h3 className="font-oswald font-bold text-xl text-white mb-3">
                Регулярные турниры
              </h3>
              <p className="text-gray-400">
                Еженедельные матчи и сезонные турниры с призовым фондом
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-green-500/50">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <h3 className="font-oswald font-bold text-xl text-white mb-3">
                Развитие навыков
              </h3>
              <p className="text-gray-400">
                Возможность улучшить игру и перейти в высшие дивизионы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl p-8 cs2-border-glow">
            <h2 className="font-oswald font-bold text-3xl text-white mb-4">
              Готовы начать свой путь?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Присоединяйтесь к Tier 4 Leagues и начните свое восхождение в мире
              киберспорта
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться в Telegram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
