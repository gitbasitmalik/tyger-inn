
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('https://contenthotels.amimir.com/hotels/gb/este_de_inglaterra_r_356/derby_c_4321/h_122927/imatges/00364737_z.jpg?w=1920&auto=format&fit=crop')` 
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 text-center text-white">
        <h1 className="font-playfair text-5xl md:text-7xl font-semibold mb-6 animate-fade-up">
          Welcome to Tyger Inn
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Experience luxury in the heart of Derby
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Link to="/booking">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Check Availability
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 hover:bg-white/20 border-white"
            onClick={() => scrollToSection('rooms')}
          >
            View Our Rooms
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
