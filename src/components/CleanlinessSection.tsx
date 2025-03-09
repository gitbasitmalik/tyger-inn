
import { CheckCircle, Shield, Sparkles } from "lucide-react";

const CleanlinessSection = () => {
  const cleanlinessFeatures = [
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Enhanced Cleaning",
      description: "Our rooms undergo a thorough cleaning process between stays, with special attention to high-touch surfaces."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Safety Standards",
      description: "We follow strict health and safety protocols recommended by health authorities for your protection."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Quality Assurance",
      description: "Each room is inspected by our quality team to ensure it meets our cleanliness standards before your arrival."
    }
  ];

  return (
    <div className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-semibold mb-4">Committed to Cleanliness</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Tigger Inn, your health and safety are our top priorities. We've enhanced our already 
            rigorous cleaning standards to ensure a safe and comfortable stay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cleanlinessFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CleanlinessSection;
