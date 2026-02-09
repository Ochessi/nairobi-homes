import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Droplets, Phone, Home, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export default function HomePage() {
  // Get featured properties (first 3)
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* Hero Section - Greptile Style with Background Image */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-house.png"
            alt="Modern Nairobi Home"
            fill
            className="object-cover object-right opacity-30 blur-[2px]"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            {/* Large Bold Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[--color-forest] leading-[1.1] tracking-tight mb-8">
              Find Your
              <br />
              Perfect
              <br />
              Home
            </h1>

            {/* Uppercase Subheading */}
            <p className="text-sm md:text-base uppercase tracking-widest text-gray-600 leading-relaxed mb-8 max-w-md">
              Verified properties with water
              <br />
              reliability ratings in Nairobi.
              <br />
              No broker fraud. No surprises.
            </p>

            {/* Search Bar */}
            <div className="mb-6">
              <SearchBar size="large" />
            </div>

            {/* CTA Button */}
            <Link href="/listings">
              <Button
                size="lg"
                className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white h-12 px-8 text-base font-medium rounded-full"
              >
                Browse Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>

            {/* Small tagline */}
            <p className="text-xs text-gray-500 mt-3">
              no viewing fees required • instant booking
            </p>

            {/* Popular Neighborhoods */}
            <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-gray-200/50">
              <span className="text-xs text-gray-500 uppercase tracking-wider">Popular:</span>
              {['Kilimani', 'Westlands', 'Pangani', 'Lavington', 'Karen'].map(area => (
                <Link
                  key={area}
                  href={`/listings?neighborhood=${area}`}
                  className="text-sm text-[--color-forest] hover:text-[--color-forest-light] transition-colors underline underline-offset-2"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Bar */}
      <section className="py-8 border-t border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 text-center">
            <p className="text-sm text-gray-600 uppercase tracking-wider">
              <span className="font-semibold text-[--color-forest]">5,000+</span> renters trust Nairobi Homes.
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-gray-300"></span>
            <Link
              href="/listings"
              className="text-sm text-[--color-forest] hover:underline font-medium flex items-center gap-1"
            >
              See why tenants <span className="text-[--color-forest]">♥</span> Nairobi Homes
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 pt-8 border-t border-gray-100">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[--color-forest]">500+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Verified Properties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[--color-forest]">15+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Neighborhoods</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[--color-forest]">98%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Water Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[--color-forest]">24h</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">Why Trust Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[--color-forest] mb-4">
              Your Peace of Mind, Verified
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nairobi faces a 260 million liter daily water deficit. We verify every property's water
              reliability so you never have to wonder again.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Water Verification */}
            <Card className="text-center p-8 border-gray-100 hover:shadow-lg transition-shadow bg-[#FAF8F5]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
                  <Droplets className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Water Reliability Ratings</h3>
                <p className="text-gray-600 text-sm">
                  Every property is rated based on water source - boreholes, tanks, or city supply.
                  Know before you rent.
                </p>
              </CardContent>
            </Card>

            {/* Verified Viewings */}
            <Card className="text-center p-8 border-gray-100 hover:shadow-lg transition-shadow bg-[#FAF8F5]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Viewings</h3>
                <p className="text-gray-600 text-sm">
                  Book verified property viewings directly. No fake listings, no broker scams,
                  no wasted trips.
                </p>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card className="text-center p-8 border-gray-100 hover:shadow-lg transition-shadow bg-[#FAF8F5]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Direct Contact</h3>
                <p className="text-gray-600 text-sm">
                  Connect directly with verified landlords and property managers.
                  No middlemen, no hidden fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Featured</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[--color-forest]">
                Handpicked Properties
              </h2>
              <p className="text-gray-600 mt-2">
                Homes with excellent water reliability
              </p>
            </div>
            <Link href="/listings">
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#1B4332]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Find Your Next Home?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of Nairobians who found their perfect home with verified
              water reliability ratings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/listings">
                <Button
                  size="lg"
                  className="bg-white text-[#1B4332] hover:bg-gray-100 h-12 px-8 rounded-full w-full sm:w-auto"
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  Browse Properties
                </Button>
              </Link>
              <Link href="/auth">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/20 h-12 px-8 rounded-full w-full sm:w-auto"
                >
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-[--color-forest] flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Nairobi Homes
              </span>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Nairobi Homes. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
