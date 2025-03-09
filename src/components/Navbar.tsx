
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
  
        <a onClick={() => scrollToSection('hero')} className="font-playfair font-semibold text-foreground cursor-pointer">
        <img style={{width : "50px", height: "50px" , backgroundColor:"transparent§"}} src="/logo.png"></img>
        Tyger Inn
        </a>
        <div className="hidden md:flex items-center gap-8">
        <a 
  onClick={() => scrollToSection('rooms')} 
  className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer hover:bg-purple-500 px-3 py-2 rounded-md"
>
  Rooms
</a>
<a 
  onClick={() => scrollToSection('explore')} 
  className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer hover:bg-purple-500 px-3 py-2 rounded-md"
>
  Explore Derby
</a>
<a 
  onClick={() => scrollToSection('contact')} 
  className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer hover:bg-purple-500 px-3 py-2 rounded-md"
>
  Contact
</a>
          <Link to="/booking">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
              Book Now
            </Button>
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
