
const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl font-semibold mb-6">About Tigger Inn</h2>
            <p className="text-lg text-foreground/80 mb-6">
              Nestled in the historic heart of Derby, Tigger Inn combines traditional British hospitality
              with modern luxury. Our boutique hotel offers a unique blend of comfort, style, and
              exceptional service.
            </p>
            <p className="text-lg text-foreground/80">
              Whether you're visiting for business or pleasure, our dedicated team ensures your stay
              is nothing short of extraordinary. Experience the perfect balance of heritage and
              contemporary comfort at Tigger Inn.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/436372438.jpg?k=aea9dee81ea48187dcf2d18611862235a15ae7e1ca3b7d05d3cdbefb18f3edfc&o=&hp=1?w=800&auto=format&fit=crop"
                alt="Tigger Inn Interior"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
