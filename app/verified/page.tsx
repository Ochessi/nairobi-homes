import { ShieldCheck, CheckCircle2, Search, ClipboardCheck, Camera, Droplets, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { properties } from "@/lib/properties";
import { PropertyCard } from "@/components/PropertyCard";

const verificationSteps = [
    {
        step: 1,
        title: "Property Inspection",
        description: "Our team conducts an in-person inspection of every property before listing.",
        icon: Search,
    },
    {
        step: 2,
        title: "Document Verification",
        description: "We verify ownership documents, rental agreements, and landlord identity.",
        icon: ClipboardCheck,
    },
    {
        step: 3,
        title: "Photo Verification",
        description: "All photos are taken by our team to ensure accuracy and recency.",
        icon: Camera,
    },
    {
        step: 4,
        title: "Water Testing",
        description: "We test water supply, storage capacity, and backup systems on-site.",
        icon: Droplets,
    },
];

export default function VerifiedPage() {
    // Get only verified properties (for demo, all properties are considered verified)
    const verifiedProperties = properties.slice(0, 6);

    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="bg-emerald-100 text-emerald-700 mb-6">
                            <ShieldCheck className="w-3 h-3 mr-1" />
                            100% Verified
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-forest] mb-6">
                            Every Home, Verified
                        </h1>
                        <p className="text-lg text-gray-600">
                            We physically inspect every property on our platform. No fake listings,
                            no misleading photos, no surprises when you visit.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-8 bg-[#1B4332]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <div className="flex items-center gap-2 text-white">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span className="text-sm">Physical Inspections</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span className="text-sm">Document Verified</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span className="text-sm">Water Tested</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span className="text-sm">Recent Photos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Verification Process */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
                            Our Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[--color-forest] mb-4">
                            How We Verify Properties
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Every property goes through our rigorous 4-step verification process
                            before appearing on Nairobi Homes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {verificationSteps.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Card key={item.step} className="bg-white border-gray-100 relative overflow-visible">
                                    <CardContent className="p-6 pt-10">
                                        <div className="absolute -top-4 left-6 w-8 h-8 bg-[--color-forest] text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {item.step}
                                        </div>
                                        <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-emerald-600" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Verified Properties */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">
                                Browse
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[--color-forest]">
                                Verified Properties
                            </h2>
                        </div>
                        <Link href="/listings?verified=true">
                            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                                View All Verified
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {verifiedProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F]">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <ShieldCheck className="w-16 h-16 text-white/20 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            List Your Verified Property
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            Are you a landlord? Get your property verified and reach thousands of
                            serious renters looking for trustworthy listings.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-[#1B4332] hover:bg-gray-100 h-12 px-8 rounded-full w-full sm:w-auto"
                                >
                                    Get Verified
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/faq">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10 h-12 px-8 rounded-full w-full sm:w-auto"
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
