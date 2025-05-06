
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Навигационная панель */}
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-xl text-blue-600">FigmaDesign</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Портфолио</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</Link>
          <Button className="bg-blue-600 hover:bg-blue-700">Связаться</Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" />
        </Button>
      </nav>

      {/* Hero секция */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Создавайте потрясающие веб-проекты</h1>
            <p className="text-lg text-gray-600 mb-6">
              Превращаем дизайны из Figma в современные, отзывчивые и производительные веб-сайты с помощью новейших технологий.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8">Начать</Button>
              <Button variant="outline" className="text-lg">Узнать больше</Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Дизайн интерфейса"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Секция преимуществ */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Palette",
                title: "Креативный дизайн",
                description: "Создаем уникальные и запоминающиеся дизайны, отражающие индивидуальность вашего бренда."
              },
              {
                icon: "Code",
                title: "Современные технологии",
                description: "Используем React, TypeScript и другие передовые технологии для создания быстрых и надежных веб-сайтов."
              },
              {
                icon: "Smartphone",
                title: "Адаптивность",
                description: "Все наши сайты прекрасно работают на любых устройствах, от смартфонов до настольных компьютеров."
              }
            ].map((item, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FigmaDesign</h3>
              <p className="text-gray-400">
                Превращаем идеи в реальность с помощью современного веб-дизайна и разработки.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400 mb-2">Email: info@figmadesign.ru</p>
              <p className="text-gray-400 mb-2">Телефон: +7 (999) 123-45-67</p>
              <p className="text-gray-400">Адрес: г. Москва, ул. Веб-разработки, 42</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Главная</Link></li>
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Услуги</Link></li>
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Портфолио</Link></li>
                <li><Link to="/" className="hover:text-blue-400 transition-colors">О нас</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Подписаться</h4>
              <p className="text-gray-400 mb-4">Получайте новости и обновления</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-4 py-2 rounded-l text-gray-800 w-full"
                />
                <Button className="rounded-l-none">OK</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 FigmaDesign. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
