import { 
    MapPin, 
    UtensilsCrossed, 
    Train, 
    Plane, 
    Landmark,
    Check 
  } from "lucide-react";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  
  type LocationItem = {
    name: string;
    distance: string;
  };
  
  const LocationSection = () => {
    const nearbyLocations: LocationItem[] = [
      { name: "Cheviot St Recreation Ground", distance: "3 km" },
      { name: "Rowditch Recreation Ground", distance: "4 km" },
      { name: "St Benedict School Playing Fields", distance: "4.1 km" },
      { name: "Stockbrook Park", distance: "4.4 km" },
      { name: "Stockbrook Park", distance: "4.5 km" },
      { name: "Kedleston Hall", distance: "4.8 km" },
      { name: "Bass Recreation Ground", distance: "4.9 km" },
      { name: "Darley Playing Fields", distance: "5 km" },
      { name: "Dalbury Lees Village Hall Play Area", distance: "5 km" },
      { name: "Derby Parks", distance: "5 km" }
    ];
    const restaurants: LocationItem[] = [
        { name: "Chef and Brewer", distance: "50 m" },
        { name: "Mei Ho", distance: "1.5 km" },
        { name: "Bull and Bush", distance: "1.5 km" }
      ];
    
      const transport: LocationItem[] = [
        { name: "Derby Train Station", distance: "5 km" },
        { name: "Peartree", distance: "7 km" }
      ];
    
      const airports: LocationItem[] = [
        { name: "East Midlands Airport", distance: "24 km" },
        { name: "Birmingham Airport", distance: "71 km" },
        { name: "Manchester Airport", distance: "78 km" }
      ];
    
      const topAttractions: LocationItem[] = [
        { name: "Tutbury Castle", distance: "17 km" }
      ];
    return (
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">Location & Surroundings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what's nearby and plan your stay at Tigger Inn
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* What's Nearby */}
            <Card className="hover-lift">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle>What's nearby</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {nearbyLocations.map((location, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">
                          <Check className="h-4 w-4" />
                        </span>
                        <span>{location.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{location.distance}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
  
            {/* Restaurants & Cafes */}
            <Card className="hover-lift">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <UtensilsCrossed className="h-6 w-6 text-primary" />
                  <CardTitle>Restaurants & cafes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Cafe/bar</span>
                      <span className="text-primary">•</span>
                      <span>{restaurants[0].name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{restaurants[0].distance}</span>
                  </li>
                  {restaurants.slice(1).map((restaurant, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Restaurant</span>
                        <span className="text-primary">•</span>
                        <span>{restaurant.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{restaurant.distance}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
  
            {/* Top Attractions */}
            <Card className="hover-lift">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Landmark className="h-6 w-6 text-primary" />
                  <CardTitle>Top attractions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {topAttractions.map((attraction, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">
                          <Check className="h-4 w-4" />
                        </span>
                        <span>{attraction.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{attraction.distance}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
  
            {/* Public Transport */}
            <Card className="hover-lift">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Train className="h-6 w-6 text-primary" />
                  <CardTitle>Public transport</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {transport.map((item, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Train</span>
                        <span className="text-primary">•</span>
                        <span>{item.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.distance}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
  
            {/* Closest Airports */}
            <Card className="hover-lift">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Plane className="h-6 w-6 text-primary" />
                  <CardTitle>Closest airports</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {airports.map((airport, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">
                          <Check className="h-4 w-4" />
                        </span>
                        <span>{airport.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{airport.distance}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  };
  
  export default LocationSection;
  