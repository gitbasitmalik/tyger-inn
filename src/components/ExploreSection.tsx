
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const attractions = [
  {
    id: 1,
    name: "Derby Cathedral",
    description: "Historic cathedral with stunning architecture, just a 5-minute walk from Tigger Inn.",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    distance: "2.8 miles",
    link: "https://derbycathedral.org"
  },
  {
    id: 2,
    name: "Derby Museum and Art Gallery",
    description: "Explore local history and art collections in this fascinating museum.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    distance: "2.5 miles",
    link: "https://derbymuseums.org"
  },
  {
    id: 3,
    name: "Derbion Shopping Centre",
    description: "Modern shopping center with popular retail stores and restaurants.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    distance: "4 miles",
    link: "https://derbion.com"
  },
  {
    id: 4,
    name: "Derwent Valley Mills",
    image: "https://images.unsplash.com/photo-1581866327034-c4579d75eb63?w=800&auto=format&fit=crop",
    description: "The Derwent Valley is a special place, where the lowlands meet the rugged grandeur of the Peak District.",
    distance: "9.3 miles",
    link: "https://www.derwentvalleymills.org"
  },
  {
    id: 5,
    name: "Derby Theatre",
    image: "https://eastmidlandstheatre.com/wp-content/uploads/2018/11/dsc_0002.jpg",
    description: "A pathway for learners of all ages. A guaranteed great night out. We’re a theatre like no other.",
    distance: "8.7 miles",
    link: "https://derbytheatre.co.uk"
  },
  {
    id: 6,
    name: "Markeaton Park",
    image: "https://www.proludic.com/wp-content/uploads/2015/01/Markeaton-Park.jpg",
    description: "Markeaton Park is Derby’s most visited park and is one of the most popular attractions in the East Midlands.",
    distance: "8 miles",
    link: "https://www.inderby.org.uk/parks/derbys-parks-and-open-spaces/markeaton-park/"
  }
];

const ExploreSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Explore Derby</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the best attractions and landmarks near Tigger Inn
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <Card key={attraction.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-sm">
                  {attraction.distance}
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                <p className="text-muted-foreground mb-4">{attraction.description}</p>
                <a
                  href={attraction.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Visit Website
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;