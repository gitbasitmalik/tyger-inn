import { 
  Car, 
  Mountain, 
  Coffee, 
  Accessibility, 
  ParkingCircle, 
  Building, 
  Trees, 
  Eye, 
  Refrigerator, 
  ChefHat,
  Check
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const HotelAmenities = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Hotel Amenities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience comfort and convenience with our comprehensive range of amenities designed to make your stay exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Parking Amenities */}
          <Card className="hover-lift">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Car className="h-6 w-6 text-primary" />
                <CardTitle>Parking</CardTitle>
              </div>
              <CardDescription>Convenient parking options</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Free parking</Label>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Private parking</Label>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">On-site parking</Label>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Accessible</Label>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Views Amenities */}
          <Card className="hover-lift">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-6 w-6 text-primary" />
                <CardTitle>Views</CardTitle>
              </div>
              <CardDescription>Beautiful scenery all around</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Garden view</Label>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Terrace</Label>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Inner courtyard view</Label>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Kitchen Facilities */}
          <Card className="hover-lift">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Coffee className="h-6 w-6 text-primary" />
                <CardTitle>Kitchen Facilities</CardTitle>
              </div>
              <CardDescription>Self-catering essentials</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Electric kettle</Label>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Refrigerator</Label>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Microwave</Label>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Kitchen</Label>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Accessibility Features */}
          <Card className="hover-lift">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Accessibility className="h-6 w-6 text-primary" />
                <CardTitle>Accessibility</CardTitle>
              </div>
              <CardDescription>Inclusive accommodations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Entire unit located on ground floor</Label>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <Label className="cursor-pointer">Entire unit wheelchair accessible</Label>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HotelAmenities;
