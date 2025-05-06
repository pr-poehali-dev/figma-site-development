
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Навигационная панель */}
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

      {/* Hero секция */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-800">
                Центр женского здоровья и гармонии
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Забота о вашем здоровье, красоте и психологическом благополучии — наш главный приоритет. 
                Мы создаем пространство, где каждая женщина может почувствовать себя особенной.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8">
                  Записаться на консультацию
                </Button>
                <Button variant="outline" className="text-pink-600 border-pink-600 hover:bg-pink-50 rounded-full">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Женское здоровье"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Секция услуг */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              В нашем центре мы предлагаем широкий спектр услуг, направленных на поддержание женского здоровья, красоты и гармонии
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Heart",
                title: "Гинекология",
                description: "Полное обследование, диагностика и лечение всех аспектов женского здоровья"
              },
              {
                icon: "Sparkles",
                title: "Косметология",
                description: "Современные процедуры для вашей красоты и молодости, индивидуальный подход"
              },
              {
                icon: "Smile",
                title: "Психологическая поддержка",
                description: "Консультации и терапия для эмоционального благополучия и внутренней гармонии"
              },
              {
                icon: "Leaf",
                title: "Альтернативная медицина",
                description: "Натуропатия, акупунктура и другие методы для естественного оздоровления"
              },
              {
                icon: "Activity",
                title: "Фитнес программы",
                description: "Специализированные программы тренировок для женского здоровья"
              },
              {
                icon: "Baby",
                title: "Планирование семьи",
                description: "Консультации по планированию беременности и поддержка будущих мам"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-pink-100 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 mx-auto bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <Icon name={service.icon} size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-center text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
                <div className="mt-4 text-center">
                  <Link 
                    to="/" 
                    className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center"
                  >
                    Подробнее
                    <Icon name="ChevronRight" size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Секция о нас */}
      <div className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">О нашем центре</h2>
              <p className="text-gray-600 mb-4">
                Центр Woman Sens был основан в 2010 году с целью создания уникального пространства, 
                где женщины могут получить комплексную заботу о своем здоровье и благополучии.
              </p>
              <p className="text-gray-600 mb-4">
                Наша команда состоит из опытных специалистов различных направлений, 
                которые объединены общей миссией - помогать женщинам сохранять здоровье, 
                красоту и внутреннюю гармонию на всех этапах жизни.
              </p>
              <p className="text-gray-600 mb-6">
                Мы стремимся создать атмосферу доверия, где каждая клиентка чувствует себя услышанной и понятой.
              </p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                Узнать больше о нас
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1580&q=80" 
                alt="Наша команда"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Секция отзывов */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">Отзывы наших клиенток</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Доверие наших клиенток - наша главная ценность. Мы благодарны за каждый отзыв и стремимся стать еще лучше
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена, 34 года",
                image: "https://images.unsplash.com/photo-1535468850893-d6e543fbd7f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHklMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
                text: "Благодаря центру Woman Sens я смогла решить проблемы со здоровьем, которые беспокоили меня годами. Профессиональный подход и внимание к деталям - то, что отличает этот центр от других."
              },
              {
                name: "Марина, 42 года",
                image: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pZGRsZSUyMGFnZWQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
                text: "Посещаю центр уже больше года и всегда получаю высококлассное обслуживание. Особенно хочу отметить программы по поддержанию здоровья во время менопаузы - они действительно работают!"
              },
              {
                name: "Анастасия, 28 лет",
                image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW91bmclMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
                text: "Консультации психолога в Woman Sens помогли мне пережить сложный период в жизни. Благодарна за профессионализм и чуткое отношение. Теперь рекомендую центр всем своим подругам."
              }
            ].map((review, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <h4 className="font-serif font-semibold text-gray-800">{review.name}</h4>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
                <div className="mt-4 flex text-pink-500">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="mr-1" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Форма контакта */}
      <div className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">Запишитесь на консультацию</h2>
              <p className="text-gray-600">
                Оставьте свои контактные данные, и мы свяжемся с вами для подтверждения даты и времени консультации
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Номер телефона</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Интересующая услуга</label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="">Выберите услугу</option>
                  <option value="gynecology">Гинекология</option>
                  <option value="cosmetology">Косметология</option>
                  <option value="psychology">Психологическая поддержка</option>
                  <option value="alternative">Альтернативная медицина</option>
                  <option value="fitness">Фитнес программы</option>
                  <option value="planning">Планирование семьи</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Сообщение (необязательно)</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Если у вас есть дополнительные вопросы или пожелания"
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-12 py-3 text-lg">
                  Отправить заявку
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Woman Sens</h3>
              <p className="text-gray-400">
                Центр женского здоровья и гармонии, где каждая женщина получает комплексную заботу и внимание.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Icon name="Facebook" size={18} />
                </a>
                <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Icon name="Instagram" size={18} />
                </a>
                <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Icon name="Twitter" size={18} />
                </a>
                <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Icon name="Telegram" size={18} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <p className="flex items-center text-gray-400">
                  <Icon name="MapPin" size={18} className="mr-2 text-pink-500" />
                  г. Москва, ул. Здоровья, 123
                </p>
                <p className="flex items-center text-gray-400">
                  <Icon name="Phone" size={18} className="mr-2 text-pink-500" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center text-gray-400">
                  <Icon name="Mail" size={18} className="mr-2 text-pink-500" />
                  info@woman-sens.ru
                </p>
                <p className="flex items-center text-gray-400">
                  <Icon name="Clock" size={18} className="mr-2 text-pink-500" />
                  Пн-Пт: 9:00-20:00, Сб: 10:00-18:00
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-pink-400 transition-colors">Гинекология</Link></li>
                <li><Link to="/" className="hover:text-pink-400 transition-colors">Косметология</Link></li>
                <li><Link to="/" className="hover:text-pink-400 transition-colors">Психологическая поддержка</Link></li>
                <li><Link to="/" className="hover:text-pink-400 transition-colors">Альтернативная медицина</Link></li>
                <li><Link to="/" className="hover:text-pink-400 transition-colors">Фитнес программы</Link></li>
                <li><Link to="/" className="hover:text-pink-400 transition-colors">Планирование семьи</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Подписка</h4>
              <p className="text-gray-400 mb-4">Подпишитесь на нашу рассылку и получайте полезные статьи о женском здоровье</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-4 py-2 rounded-l-full text-gray-800 w-full focus:outline-none"
                />
                <Button className="bg-pink-600 hover:bg-pink-700 rounded-r-full rounded-l-none">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Woman Sens. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
