
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <nav className="bg-white border-b border-pink-100 sticky top-0 z-10">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl text-pink-600">Woman Sens</span>
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Главная</Link>
          <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Услуги</Link>
          <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">О нас</Link>
          <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Статьи</Link>
          <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Контакты</Link>
          <Button className="bg-pink-500 hover:bg-pink-600 rounded-full">Записаться</Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" />
        </Button>
      </div>
    </nav>
  );
};

export default Header;
