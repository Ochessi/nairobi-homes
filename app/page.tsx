import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Droplets, CheckCircle2, Phone, Star, Home, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export default function HomePage() {
  // Get featured properties (first 3)
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 forest-gradient opacity-95" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge className="bg-white/20 text-white border-white/30 mb-6 py-1.5 px-4">
              <Home className="w-4 h-4 mr-2" />
              Trusted by 5,000+ Nairobi Renters
            </Badge>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect Home in{" "}
              <span className="text-[--color-sand]">Nairobi</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Discover verified properties with{" "}
              <span className="font-semibold text-[--color-sand]">water reliability ratings</span>.
              Say goodbye to broker fraud and water shortages.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar size="large" />
            </div>

            {/* Quick neighborhood links */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-white/70 text-sm">Popular:</span>
              {['Kilimani', 'Westlands', 'Pangani', 'Lavington', 'Karen'].map(area => (
                <Link
                  key={area}
                  href={`/listings?neighborhood=${area}`}
                  className="text-white hover:text-[--color-sand] transition-colors text-sm underline underline-offset-2"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="var(--background)"
            />
          </svg>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[--color-sand] text-[--color-forest] mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Why Trust Us
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Peace of Mind, Verified
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nairobi faces a 260 million liter daily water deficit. We verify every property's water
              reliability so you never have to wonder again.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Water Verification */}
            <Card className="text-center p-6 border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
                  <Droplets className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Water Reliability Ratings</h3>
                <p className="text-muted-foreground">
                  Every property is rated based on water source - boreholes, tanks, or city supply.
                  Know before you rent.
                </p>
              </CardContent>
            </Card>

            {/* Verified Viewings */}
            <Card className="text-center p-6 border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Verified Viewings</h3>
                <p className="text-muted-foreground">
                  Book verified property viewings directly. No fake listings, no broker scams,
                  no wasted trips.
                </p>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card className="text-center p-6 border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Direct Contact</h3>
                <p className="text-muted-foreground">
                  Connect directly with verified landlords and property managers.
                  No middlemen, no hidden fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Featured Properties
              </h2>
              <p className="text-muted-foreground mt-2">
                Handpicked homes with excellent water reliability
              </p>
            </div>
            <Link href="/listings">
              <Button variant="outline" className="touch-target">
                View All Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-[--color-forest]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="font-heading text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80">Verified Properties</div>
            </div>
            <div>
              <div className="font-heading text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80">Neighborhoods</div>
            </div>
            <div>
              <div className="font-heading text-4xl lg:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-white/80">Happy Renters</div>
            </div>
            <div>
              <div className="font-heading text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/80">Water Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Find Your Next Home?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of Nairobians who found their perfect home with verified
              water reliability ratings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/listings">
                <Button size="lg" className="bg-[--color-forest] hover:bg-[--color-forest-light] text-white touch-target w-full sm:w-auto">
                  <Building2 className="w-5 h-5 mr-2" />
                  Browse Properties
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="lg" variant="outline" className="touch-target w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[--color-forest] flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold text-[--color-forest]">
                Nairobi Homes
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Nairobi Homes. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
