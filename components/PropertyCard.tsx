"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Bed, Bath, Square, Car, Shield } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WaterBadge } from "@/components/WaterBadge";
import { Property, EXPRESSWAY_PROXIMITY_LABELS } from "@/lib/types";
import { formatPrice } from "@/lib/properties";
import { useLowDataMode } from "@/components/Providers";

interface PropertyCardProps {
    property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
    const { lowDataMode } = useLowDataMode();

    // In low data mode, use smaller image size
    const imageUrl = lowDataMode
        ? property.images[0]?.replace('w=800', 'w=200')
        : property.images[0];

    return (
        <Link href={`/listings/${property.id}`}>
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={property.title}
                            fill
                            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${lowDataMode ? 'image-rendering-pixelated' : ''
                                }`}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <Square className="w-12 h-12 text-muted-foreground" />
                        </div>
                    )}

                    {/* Verified Badge */}
                    {property.verified && (
                        <div className="absolute top-3 left-3">
                            <Badge className="bg-[--color-forest] text-white flex items-center gap-1">
                                <Shield className="w-3 h-3" />
                                Verified
                            </Badge>
                        </div>
                    )}

                    {/* Price Tag */}
                    <div className="absolute bottom-3 left-3">
                        <div className="bg-background/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
                            <span className="font-heading text-lg font-bold text-[--color-forest]">
                                {formatPrice(property.price)}
                            </span>
                            <span className="text-sm text-muted-foreground">/month</span>
                        </div>
                    </div>
                </div>

                <CardContent className="p-4">
                    {/* Title */}
                    <h3 className="font-heading text-lg font-semibold line-clamp-1 group-hover:text-[--color-forest] transition-colors">
                        {property.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm line-clamp-1">{property.location}</span>
                    </div>

                    {/* Property Details */}
                    <div className="flex items-center gap-4 mt-3 text-sm">
                        <div className="flex items-center gap-1.5">
                            <Bed className="w-4 h-4 text-muted-foreground" />
                            <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Bath className="w-4 h-4 text-muted-foreground" />
                            <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Square className="w-4 h-4 text-muted-foreground" />
                            <span>{property.sqft.toLocaleString()} sq ft</span>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="px-4 pb-4 pt-0 flex flex-wrap items-center gap-2">
                    {/* Water Reliability Badge */}
                    <WaterBadge level={property.waterReliability} size="sm" />

                    {/* Expressway Proximity */}
                    {property.expresswayProximity === 'near' && (
                        <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                            <Car className="w-3 h-3" />
                            Near Expressway
                        </Badge>
                    )}
                </CardFooter>
            </Card>
        </Link>
    );
}
