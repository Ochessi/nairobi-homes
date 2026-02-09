import { notFound } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft, MapPin, Bed, Bath, Square, Shield, Calendar,
    Phone, Mail, Car, Droplet, CheckCircle2, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PhotoGallery } from "@/components/PhotoGallery";
import { WaterBadge } from "@/components/WaterBadge";
import { getPropertyById, formatPrice } from "@/lib/properties";
import { HOUSE_TYPE_LABELS, EXPRESSWAY_PROXIMITY_LABELS, WATER_RELIABILITY_INFO } from "@/lib/types";

interface PropertyDetailPageProps {
    params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
    const { id } = await params;
    const property = getPropertyById(id);

    if (!property) {
        notFound();
    }

    const waterInfo = WATER_RELIABILITY_INFO[property.waterReliability];

    return (
        <div className="min-h-screen bg-background">
            {/* Breadcrumb */}
            <div className="bg-muted/50 border-b border-border">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        href="/listings"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to listings
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Photo Gallery */}
                        <PhotoGallery images={property.images} title={property.title} />

                        {/* Title & Location */}
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                {property.verified && (
                                    <Badge className="bg-[--color-forest] text-white">
                                        <Shield className="w-3 h-3 mr-1" />
                                        Verified Property
                                    </Badge>
                                )}
                                <Badge variant="secondary">
                                    {HOUSE_TYPE_LABELS[property.type]}
                                </Badge>
                            </div>

                            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                                {property.title}
                            </h1>

                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="w-5 h-5 flex-shrink-0" />
                                <span className="text-lg">{property.location}</span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="p-4 rounded-xl bg-muted/50 text-center">
                                <Bed className="w-6 h-6 mx-auto mb-2 text-[--color-forest]" />
                                <div className="font-semibold">{property.bedrooms}</div>
                                <div className="text-sm text-muted-foreground">Bedrooms</div>
                            </div>
                            <div className="p-4 rounded-xl bg-muted/50 text-center">
                                <Bath className="w-6 h-6 mx-auto mb-2 text-[--color-forest]" />
                                <div className="font-semibold">{property.bathrooms}</div>
                                <div className="text-sm text-muted-foreground">Bathrooms</div>
                            </div>
                            <div className="p-4 rounded-xl bg-muted/50 text-center">
                                <Square className="w-6 h-6 mx-auto mb-2 text-[--color-forest]" />
                                <div className="font-semibold">{property.sqft.toLocaleString()}</div>
                                <div className="text-sm text-muted-foreground">Sq Ft</div>
                            </div>
                            <div className="p-4 rounded-xl bg-muted/50 text-center">
                                <Car className="w-6 h-6 mx-auto mb-2 text-[--color-forest]" />
                                <div className="font-semibold text-sm">{EXPRESSWAY_PROXIMITY_LABELS[property.expresswayProximity].split('(')[0]}</div>
                                <div className="text-sm text-muted-foreground">Expressway</div>
                            </div>
                        </div>

                        {/* Water Reliability Section */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Droplet className="w-5 h-5 text-teal-600" />
                                    Water Reliability
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <WaterBadge level={property.waterReliability} size="lg" showTooltip={false} />
                                    <div>
                                        <p className="text-muted-foreground">
                                            {waterInfo.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 p-4 rounded-lg bg-muted/50">
                                    <p className="text-sm text-muted-foreground">
                                        <strong>Why this matters:</strong> Nairobi faces a 260 million liter daily water deficit.
                                        We verify each property's water source to help you make informed decisions.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Description */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle>About This Property</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {property.description}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Amenities */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle>Amenities</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {property.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Pricing Card */}
                            <Card className="border-border/50 shadow-lg">
                                <CardContent className="pt-6">
                                    <div className="text-center mb-6">
                                        <div className="text-sm text-muted-foreground mb-1">Monthly Rent</div>
                                        <div className="font-heading text-4xl font-bold text-[--color-forest]">
                                            {formatPrice(property.price)}
                                        </div>
                                    </div>

                                    <Separator className="my-6" />

                                    {/* Verified Viewing Button */}
                                    <Button
                                        size="lg"
                                        className="w-full bg-[--color-forest] hover:bg-[--color-forest-light] text-white touch-target mb-4"
                                    >
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Book a Verified Viewing
                                    </Button>

                                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900">
                                        <div className="flex items-start gap-2">
                                            <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                                                    Verified Viewing
                                                </p>
                                                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                                                    Meet our verified agent at the property. No broker scams, guaranteed.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator className="my-6" />

                                    {/* Contact Options */}
                                    <div className="space-y-3">
                                        <Button variant="outline" className="w-full touch-target">
                                            <Phone className="w-4 h-4 mr-2" />
                                            Call Now
                                        </Button>
                                        <Button variant="outline" className="w-full touch-target">
                                            <Mail className="w-4 h-4 mr-2" />
                                            Send Message
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Safety Tips */}
                            <Card className="border-border/50 bg-amber-50 dark:bg-amber-950/20">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-base flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5 text-amber-600" />
                                        Safety Tips
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <ul className="text-sm text-muted-foreground space-y-2">
                                        <li>• Never pay before viewing the property</li>
                                        <li>• Always verify landlord identity</li>
                                        <li>• Get a proper tenancy agreement</li>
                                        <li>• Check water availability yourself</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Listed Date */}
                            <div className="text-center text-sm text-muted-foreground">
                                Listed on {new Date(property.createdAt).toLocaleDateString('en-KE', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
