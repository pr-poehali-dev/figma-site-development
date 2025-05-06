
import ServiceCard from "./ServiceCard";

const servicesData = [
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
];

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            В нашем центре мы предлагаем широкий спектр услуг, направленных на поддержание женского здоровья, красоты и гармонии
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
