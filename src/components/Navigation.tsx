import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/leaderboard", label: "Таблица лидеров", icon: "Trophy" },
    { path: "/about", label: "О лиге", icon: "Info" },
    { path: "/contacts", label: "Контакты", icon: "MessageCircle" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="font-oswald font-bold text-xl text-white cs2-glow">
              TIER 4 LEAGUES
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-orange-500/20 text-orange-400 cs2-border-glow"
                    : "text-gray-300 hover:text-orange-400 hover:bg-orange-500/10"
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-orange-400">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
