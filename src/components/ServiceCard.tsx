
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-pink-100 hover:shadow-md transition-shadow group">
      <div className="w-14 h-14 mx-auto bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
        <Icon name={icon} size={24} />
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
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
  );
};

export default ServiceCard;
