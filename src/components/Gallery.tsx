
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop", title: "Luxury Suite" },
  { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop", title: "Hotel Exterior" },
  { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop", title: "Restaurant" },
  { url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop", title: "Spa Area" },
  { url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&auto=format&fit=crop", title: "Conference Room" },
  { url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop", title: "Deluxe Room" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20">
      <div className="container">
        <h2 className="font-playfair text-4xl font-semibold text-center mb-12">
          Experience Tigger Inn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-playfair">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <Dialog open={true} onOpenChange={() => setSelectedImage(null)}>
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center backdrop-blur-sm">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev! - 1))}
              className="absolute left-4 text-white hover:text-primary transition-colors z-50"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <div className="max-w-7xl mx-auto px-4">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="max-h-[85vh] max-w-full object-contain rounded-lg"
              />
            </div>
            <button
              onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev! + 1))}
              className="absolute right-4 text-white hover:text-primary transition-colors z-50"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </Dialog>
      )}
    </section>
  );
};

export default Gallery;
