
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import RoomsSection from "@/components/RoomsSection";
import ExploreSection from "@/components/ExploreSection";
import ContactSection from "@/components/ContactSection";
import CleanlinessSection from "@/components/CleanlinessSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import ReviewSection from "@/components/ReviewSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="rooms">
        <RoomsSection />
      </section>
      <section id="explore">
        <ExploreSection />
      </section>
        <section id="locations">
          <LocationSection/>
        </section>
      <section id="cleanliness">
        <CleanlinessSection />
      </section>
      
      <section id="amenities">
        <AmenitiesSection />
        </section>
      <section id="review">
        <ReviewSection />
        </section>
      <section id="contact">
        <ContactSection />
      </section>
    
    </div>
  );
};

export default Index;
