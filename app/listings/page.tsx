"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { MapPin, Home, Building2 } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { SearchBar } from "@/components/SearchBar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { filterProperties, properties } from "@/lib/properties";

function ListingsContent() {
    const searchParams = useSearchParams();

    // Get filter values from URL
    const neighborhood = searchParams.get('neighborhood') || undefined;
    const priceMin = searchParams.get('priceMin') ? parseInt(searchParams.get('priceMin')!) : undefined;
    const priceMax = searchParams.get('priceMax') ? parseInt(searchParams.get('priceMax')!) : undefined;
    const bedrooms = searchParams.get('bedrooms') ? parseInt(searchParams.get('bedrooms')!) : undefined;
    const types = searchParams.get('type')?.split(',') || undefined;
    const water = searchParams.get('water')?.split(',') || undefined;
    const expressway = searchParams.get('expressway')?.split(',') || undefined;

    // Filter properties
    const filteredProperties = filterProperties({
        neighborhood,
        priceMin,
        priceMax,
        bedrooms,
        type: types,
        waterReliability: water,
        expresswayProximity: expressway,
    });

    // Count active filters
    const activeFilters = [
        neighborhood,
        priceMin,
        priceMax,
        bedrooms,
        types?.length,
        water?.length,
        expressway?.length,
    ].filter(Boolean).length;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-muted/50 border-b border-border">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto mb-6">
                        <SearchBar />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {neighborhood && (
                            <Badge variant="secondary" className="flex items-center gap-1.5 py-1.5 px-3">
                                <MapPin className="w-4 h-4" />
                                {neighborhood}
                            </Badge>
                        )}
                        <span className="text-muted-foreground">
                            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex gap-8">
                    {/* Sidebar */}
                    <FilterSidebar />

                    {/* Properties Grid */}
                    <div className="flex-1">
                        {/* Mobile Filter Button is inside FilterSidebar */}
                        <div className="lg:hidden mb-6">
                            <FilterSidebar />
                        </div>

                        {filteredProperties.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                                    <Building2 className="w-10 h-10 text-muted-foreground" />
                                </div>
                                <h3 className="font-heading text-xl font-semibold mb-2">No properties found</h3>
                                <p className="text-muted-foreground mb-6">
                                    Try adjusting your filters or search for a different neighborhood.
                                </p>
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProperties.map(property => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ListingsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="animate-pulse text-muted-foreground">Loading properties...</div>
            </div>
        }>
            <ListingsContent />
        </Suspense>
    );
}
