"use client";

import { useState } from "react";
import { Plus, X, Bed, Bath, Ruler, Droplets, MapPin, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { properties } from "@/lib/properties";
import Image from "next/image";
import Link from "next/link";
import { useLowDataMode } from "@/components/Providers";
import { WaterBadge } from "@/components/WaterBadge";

export default function ComparePage() {
    const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
    const [showSelector, setShowSelector] = useState(false);
    const { lowDataMode } = useLowDataMode();

    const addProperty = (id: string) => {
        if (selectedProperties.length < 3 && !selectedProperties.includes(id)) {
            setSelectedProperties([...selectedProperties, id]);
        }
        setShowSelector(false);
    };

    const removeProperty = (id: string) => {
        setSelectedProperties(selectedProperties.filter((p) => p !== id));
    };

    const compareProperties = properties.filter((p) =>
        selectedProperties.includes(p.id)
    );

    const availableProperties = properties.filter(
        (p) => !selectedProperties.includes(p.id)
    );

    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
                            Compare
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[--color-forest] mb-4">
                            Compare Properties
                        </h1>
                        <p className="text-gray-600">
                            Select up to 3 properties to compare side-by-side. Make an informed decision
                            with our detailed comparison tool.
                        </p>
                    </div>
                </div>
            </section>

            {/* Property Selector */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Selected properties */}
                        {compareProperties.map((property) => (
                            <Card key={property.id} className="bg-white border-gray-100">
                                <CardContent className="p-0">
                                    <div className="relative h-48">
                                        <Image
                                            src={property.images[0]}
                                            alt={property.title}
                                            fill
                                            className="object-cover rounded-t-lg"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            quality={lowDataMode ? 30 : 75}
                                        />
                                        <button
                                            onClick={() => removeProperty(property.id)}
                                            className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors"
                                        >
                                            <X className="w-4 h-4 text-red-500" />
                                        </button>
                                        <div className="absolute bottom-2 left-2">
                                            <WaterBadge level={property.waterReliability} />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-1 truncate">
                                            {property.title}
                                        </h3>
                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {property.neighborhood}
                                        </div>
                                        <div className="text-xl font-bold text-[--color-forest]">
                                            KSh {property.price.toLocaleString()}
                                            <span className="text-sm font-normal text-gray-500">/mo</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Add property slots */}
                        {[...Array(3 - selectedProperties.length)].map((_, i) => (
                            <Card
                                key={`empty-${i}`}
                                className="bg-white border-gray-200 border-dashed cursor-pointer hover:border-[--color-forest] transition-colors"
                                onClick={() => setShowSelector(true)}
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 flex flex-col items-center justify-center text-gray-400">
                                        <Plus className="w-12 h-12 mb-2" />
                                        <span className="text-sm">Add Property</span>
                                    </div>
                                    <div className="p-4 border-t border-gray-100">
                                        <div className="h-14"></div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            {compareProperties.length >= 2 && (
                <section className="py-8 pb-16">
                    <div className="container mx-auto px-4">
                        <Card className="bg-white border-gray-100 overflow-hidden">
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-100 bg-gray-50">
                                                <th className="text-left p-4 font-medium text-gray-500 w-1/4">
                                                    Feature
                                                </th>
                                                {compareProperties.map((property) => (
                                                    <th
                                                        key={property.id}
                                                        className="text-left p-4 font-medium text-gray-900"
                                                    >
                                                        {property.title}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-50">
                                                <td className="p-4 text-gray-500">Price</td>
                                                {compareProperties.map((property) => (
                                                    <td key={property.id} className="p-4">
                                                        <span className="font-bold text-[--color-forest]">
                                                            KSh {property.price.toLocaleString()}
                                                        </span>
                                                        <span className="text-gray-500">/mo</span>
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className="border-b border-gray-50">
                                                <td className="p-4 text-gray-500">Bedrooms</td>
                                                {compareProperties.map((property) => (
                                                    <td key={property.id} className="p-4">
                                                        <div className="flex items-center gap-2">
                                                            <Bed className="w-4 h-4 text-gray-400" />
                                                            {property.bedrooms}
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className="border-b border-gray-50">
                                                <td className="p-4 text-gray-500">Bathrooms</td>
                                                {compareProperties.map((property) => (
                                                    <td key={property.id} className="p-4">
                                                        <div className="flex items-center gap-2">
                                                            <Bath className="w-4 h-4 text-gray-400" />
                                                            {property.bathrooms}
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className="border-b border-gray-50">
                                                <td className="p-4 text-gray-500">Size</td>
                                                {compareProperties.map((property) => (
                                                    <td key={property.id} className="p-4">
                                                        <div className="flex items-center gap-2">
                                                            <Ruler className="w-4 h-4 text-gray-400" />
                                                            {property.sqft} sqft
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className="border-b border-gray-50">
                                                <td className="p-4 text-gray-500">Water Reliability</td>
                                                {compareProperties.map((property) => (
                                                    <td key={property.id} className="p-4">
                                                        <WaterBadge level={property.waterReliability} />
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className="border-b border-gray-50">
                                                <td className="p-4 text-gray-500">Location</td>
                                                {compareProperties.map((property) => (
                                                    <td key={property.id} className="p-4">
                                                        {property.neighborhood}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className="border-b border-gray-50">
                                                <td className="p-4 text-gray-500">Property Type</td>
                                                {compareProperties.map((property) => (
                                                    <td key={property.id} className="p-4 capitalize">
                                                        {property.type}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-gray-500">Actions</td>
                                                {compareProperties.map((property) => (
                                                    <td key={property.id} className="p-4">
                                                        <Link href={`/listings/${property.id}`}>
                                                            <Button
                                                                size="sm"
                                                                className="bg-[--color-forest] hover:bg-[--color-forest-light]"
                                                            >
                                                                View Details
                                                                <ArrowRight className="w-3 h-3 ml-1" />
                                                            </Button>
                                                        </Link>
                                                    </td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            )}

            {/* Property Selection Modal */}
            {showSelector && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <Card className="bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden">
                        <CardContent className="p-0">
                            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900">Select a Property</h3>
                                <button
                                    onClick={() => setShowSelector(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="p-4 max-h-[60vh] overflow-y-auto">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {availableProperties.map((property) => (
                                        <button
                                            key={property.id}
                                            onClick={() => addProperty(property.id)}
                                            className="text-left p-3 rounded-lg border border-gray-100 hover:border-[--color-forest] hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="font-medium text-gray-900 truncate">
                                                {property.title}
                                            </div>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {property.neighborhood}
                                            </div>
                                            <div className="text-sm font-semibold text-[--color-forest] mt-1">
                                                KSh {property.price.toLocaleString()}/mo
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Empty State */}
            {compareProperties.length < 2 && (
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                            <Droplets className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Select at least 2 properties to compare
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Click the "Add Property" cards above to start comparing
                            </p>
                            <Link href="/listings">
                                <Button variant="outline" className="border-gray-300">
                                    Browse All Properties
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
