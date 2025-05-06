
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
  );
};

export default Hero;
