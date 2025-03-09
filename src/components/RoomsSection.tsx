import { forwardRef } from "react";

const RoomsSection = forwardRef<HTMLDivElement>((props, ref) => { 
  const rooms = [
    {
      title: "Deluxe Suite",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop",
      description: "Spacious suite with king-size bed and city views",
      price: "£199",
    },
    {
      title: "Executive Room",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop",
      description: "Modern room with premium amenities",
      price: "£149",
    },
    {
      title: "Family Suite",
      image: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&auto=format&fit=crop",
      description: "Perfect for families, with connecting rooms",
      price: "£249",
    },
  ];

  return (
    <div ref={ref} className="min-h-screen bg-background py-20"> 
      <div className="container mx-auto">
        <h1 className="text-4xl font-playfair font-semibold text-center mb-12">Our Rooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3]">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-semibold text-primary">{room.price}</span>
                  <a 
                    href="/booking" 
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default RoomsSection;