import { Users, Target, Shield, Droplets, Heart, ArrowRight, Home, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const teamMembers = [
    {
        name: "Wanjiru Kamau",
        role: "Founder & CEO",
        bio: "Former urban planner with 10+ years in Nairobi development. Started Nairobi Homes after experiencing rental fraud firsthand.",
    },
    {
        name: "David Omondi",
        role: "Head of Verification",
        bio: "Quality assurance expert who leads our property inspection team. Ensures every listing meets our standards.",
    },
    {
        name: "Fatima Hassan",
        role: "Customer Success",
        bio: "Passionate about helping renters find their perfect homes. Responds to every inquiry within hours.",
    },
    {
        name: "Brian Mwangi",
        role: "Tech Lead",
        bio: "Built the platform from scratch. Focused on making property search fast and accessible on any device.",
    },
];

const values = [
    {
        icon: Shield,
        title: "Transparency",
        description: "Every property is verified. Every photo is real. No hidden fees, no surprises.",
    },
    {
        icon: Droplets,
        title: "Water First",
        description: "We understand water reliability matters most to Nairobi renters. It's our #1 priority.",
    },
    {
        icon: Heart,
        title: "Tenant-Focused",
        description: "We built this platform for renters who are tired of scams and wasted time.",
    },
    {
        icon: Target,
        title: "Local Expertise",
        description: "We know Nairobi neighborhoods inside out. Our team lives where you want to live.",
    },
];

const milestones = [
    { year: "2022", event: "Founded with a mission to end rental fraud in Nairobi" },
    { year: "2023", event: "Launched water reliability ratings - a first in Kenya" },
    { year: "2023", event: "Reached 1,000 verified property listings" },
    { year: "2024", event: "Helped 5,000+ renters find their perfect homes" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
                            About Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-forest] mb-6">
                            Making Nairobi Rentals Trustworthy
                        </h1>
                        <p className="text-lg text-gray-600">
                            We believe finding a home shouldn't involve fraud, fake listings, or water surprises.
                            That's why we verify every property and rate every tap.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-8 bg-[#1B4332]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
                            <div className="text-sm text-white/70 mt-1">Verified Properties</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">5,000+</div>
                            <div className="text-sm text-white/70 mt-1">Happy Renters</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                            <div className="text-sm text-white/70 mt-1">Neighborhoods</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">0</div>
                            <div className="text-sm text-white/70 mt-1">Broker Fees</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[--color-forest] mb-8 text-center">
                            Our Story
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Nairobi Homes was born out of frustration. Our founder, Wanjiru, spent months
                                searching for an apartment in 2021. She paid viewing fees to see properties that
                                didn't exist. She was shown photos that were years old. And worst of all, she moved
                                into an apartment only to discover the water ran for just 2 hours a week.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                In a city where the 260 million liter daily water deficit is a reality, she
                                realized that no platform was addressing this critical issue. That's when the idea
                                for Nairobi Homes was born: a platform that verifies every property, rates water
                                reliability, and connects renters directly with landlords.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Today, we've helped thousands of Nairobians find homes they can trust. But we're
                                just getting started. Our mission is to make every rental transaction in Nairobi
                                transparent, fair, and fraud-free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[--color-forest] mb-4">
                            Our Values
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            These principles guide everything we do at Nairobi Homes.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <Card key={value.title} className="bg-[#FAF8F5] border-gray-100 text-center">
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 rounded-lg bg-[--color-forest]/10 flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-6 h-6 text-[--color-forest]" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                                        <p className="text-sm text-gray-600">{value.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[--color-forest] mb-12 text-center">
                            Our Journey
                        </h2>
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="flex-shrink-0 w-16">
                                        <div className="text-sm font-bold text-[--color-forest]">
                                            {milestone.year}
                                        </div>
                                    </div>
                                    <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 relative">
                                        <div className="absolute left-0 top-0 w-3 h-3 bg-[--color-forest] rounded-full -translate-x-[7px]" />
                                        <p className="text-gray-700">{milestone.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[--color-forest] mb-4">
                            Meet the Team
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A small but mighty team dedicated to making Nairobi rentals better.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {teamMembers.map((member) => (
                            <Card key={member.name} className="bg-[#FAF8F5] border-gray-100">
                                <CardContent className="p-6 text-center">
                                    <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                                        <Users className="w-8 h-8 text-gray-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                    <div className="text-sm text-[--color-forest] mb-3">{member.role}</div>
                                    <p className="text-sm text-gray-600">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F]">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Join Our Mission
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            Whether you're looking for a home or want to list your property,
                            we're here to make the process transparent and trustworthy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/listings">
                                <Button
                                    size="lg"
                                    className="bg-white text-[#1B4332] hover:bg-gray-100 h-12 px-8 rounded-full w-full sm:w-auto"
                                >
                                    <Home className="w-5 h-5 mr-2" />
                                    Find a Home
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10 h-12 px-8 rounded-full w-full sm:w-auto"
                                >
                                    <Building2 className="w-5 h-5 mr-2" />
                                    List Property
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
