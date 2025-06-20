import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen cs2-bg-pattern">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-white mb-4 cs2-glow">
              КОНТАКТЫ
            </h1>
            <p className="text-xl text-gray-300">
              Как присоединиться к Tier 4 Leagues
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/40 rounded-xl p-8 cs2-border-glow">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <h2 className="font-oswald font-bold text-2xl text-white mb-2">
                  Основной контакт
                </h2>
                <p className="text-gray-300">
                  Для вступления в лигу и всех вопросов
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Icon name="Send" size={24} className="text-blue-400" />
                  <span className="font-oswald font-bold text-xl text-white">
                    @VSPteam
                  </span>
                </div>
                <p className="text-center text-gray-300 text-sm">
                  Telegram для связи с организаторами
                </p>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg"
                onClick={() => window.open("https://t.me/VSPteam", "_blank")}
              >
                <Icon name="ExternalLink" size={20} className="mr-2" />
                Открыть в Telegram
              </Button>
            </div>

            <div className="space-y-6">
              <div className="bg-black/40 rounded-xl p-6 border border-green-500/50">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="UserPlus" size={24} className="text-green-400" />
                  <h3 className="font-oswald font-bold text-xl text-white">
                    Как присоединиться
                  </h3>
                </div>
                <ol className="text-gray-300 space-y-2">
                  <li>1. Напишите в @VSPteam</li>
                  <li>2. Укажите название команды</li>
                  <li>3. Предоставьте состав (5 игроков)</li>
                  <li>4. Дождитесь подтверждения</li>
                </ol>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-orange-500/50">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Clock" size={24} className="text-orange-400" />
                  <h3 className="font-oswald font-bold text-xl text-white">
                    Время ответа
                  </h3>
                </div>
                <p className="text-gray-300">
                  Отвечаем в течение 24 часов с момента обращения
                </p>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-purple-500/50">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon
                    name="HelpCircle"
                    size={24}
                    className="text-purple-400"
                  />
                  <h3 className="font-oswald font-bold text-xl text-white">
                    Часто задаваемые вопросы
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-white font-medium">
                      Какие требования к команде?
                    </p>
                    <p className="text-gray-400">
                      5 основных игроков, стабильный состав
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      Есть ли взнос за участие?
                    </p>
                    <p className="text-gray-400">Нет, участие бесплатное</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      Когда начинается сезон?
                    </p>
                    <p className="text-gray-400">
                      Информация в телеграм канале
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-xl p-8 cs2-border-glow text-center">
            <h2 className="font-oswald font-bold text-2xl text-white mb-4">
              Готовы начать?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Не упустите шанс стать частью первой лиги для команд 4-го тира.
              Ваше киберспортивное будущее начинается здесь!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg"
                onClick={() => window.open("https://t.me/VSPteam", "_blank")}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать @VSPteam
              </Button>
              <Button
                variant="outline"
                className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 py-3 px-8"
              >
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
