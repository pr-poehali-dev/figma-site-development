
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Woman Sens</h3>
            <p className="text-gray-400">
              Центр женского здоровья и гармонии, где каждая женщина получает комплексную заботу и внимание.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon name="Facebook" />
              <SocialIcon name="Instagram" />
              <SocialIcon name="Twitter" />
              <SocialIcon name="Youtube" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <ContactItem icon="MapPin" text="г. Москва, ул. Здоровья, 123" />
              <ContactItem icon="Phone" text="+7 (495) 123-45-67" />
              <ContactItem icon="Mail" text="info@woman-sens.ru" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <FooterLinks />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Подписка</h4>
            <p className="text-gray-400 mb-4">Подпишитесь на нашу рассылку и получайте полезные статьи о женском здоровье</p>
            <SubscribeForm />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Woman Sens. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ name }: { name: string }) => (
  <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
    <Icon name={name} size={18} />
  </a>
);

const ContactItem = ({ icon, text }: { icon: string; text: string }) => (
  <p className="flex items-center text-gray-400">
    <Icon name={icon} size={18} className="mr-2 text-pink-500" />
    {text}
  </p>
);

const FooterLinks = () => (
  <ul className="space-y-2 text-gray-400">
    {["Гинекология", "Косметология", "Психологическая поддержка", 
      "Альтернативная медицина", "Фитнес программы", "Планирование семьи"].map((item, index) => (
      <li key={index}>
        <Link to="/" className="hover:text-pink-400 transition-colors">{item}</Link>
      </li>
    ))}
  </ul>
);

const SubscribeForm = () => (
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
);

export default Footer;
