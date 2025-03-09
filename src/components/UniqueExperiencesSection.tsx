
import { Coffee, Utensils, Music, Wine } from "lucide-react";

const UniqueExperiencesSection = () => {
  const experiences = [
    {
      image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=800&auto=format&fit=crop",
      title: "Afternoon Tea Experience",
      description: "Enjoy our signature afternoon tea service featuring local delicacies and premium teas.",
      icon: <Coffee className="h-6 w-6" />
    },
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop",
      title: "Gourmet Dining",
      description: "Savor exquisite dishes prepared by our award-winning chef using locally sourced ingredients.",
      icon: <Utensils className="h-6 w-6" />
    },
    {
      image: "https://images.unsplash.com/photo-1489686995744-f47e995ffe61?w=800&auto=format&fit=crop",
      title: "Local Wine Tasting",
      description: "Sample a selection of fine wines from the region guided by our experienced sommelier.",
      icon: <Wine className="h-6 w-6" />
    },
    {
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&auto=format&fit=crop",
      title: "Live Music Evenings",
      description: "Relax to the sounds of local musicians performing in our elegant lounge every weekend.",
      icon: <Music className="h-6 w-6" />
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-semibold mb-4">Unique Experiences at Tigger Inn</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Make your stay unforgettable with our exclusive experiences designed to immerse you
            in luxury and local culture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[3/2]">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-primary text-white p-2 rounded-bl-lg">
                  {exp.icon}
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-white to-secondary/20">
                <h3 className="text-xl font-playfair font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniqueExperiencesSection;
