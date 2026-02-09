import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Grace Muthoni",
        location: "Kilimani",
        rating: 5,
        quote: "The water reliability rating saved me from a nightmare! My previous apartment had constant water issues. Now I have a borehole-backed unit and haven't had a single day without water.",
        image: "/testimonials/grace.jpg",
    },
    {
        id: 2,
        name: "James Ochieng",
        location: "Westlands",
        rating: 5,
        quote: "Finally, a platform that understands what matters to Nairobi renters. The verification process gave me confidence that what I saw online was exactly what I got.",
        image: "/testimonials/james.jpg",
    },
    {
        id: 3,
        name: "Sarah Wanjiku",
        location: "Lavington",
        rating: 5,
        quote: "I was tired of dealing with brokers who showed me fake listings. Nairobi Homes connected me directly with the landlord. Moved in within a week!",
        image: "/testimonials/sarah.jpg",
    },
    {
        id: 4,
        name: "Michael Kamau",
        location: "Pangani",
        rating: 4,
        quote: "Great experience overall. The expressway proximity feature helped me find a place with easy access to work. Commute time cut in half!",
        image: "/testimonials/michael.jpg",
    },
    {
        id: 5,
        name: "Amina Hassan",
        location: "Karen",
        rating: 5,
        quote: "As a young professional, I needed a reliable place quickly. The instant booking feature made it possible to secure my apartment the same day I viewed it.",
        image: "/testimonials/amina.jpg",
    },
    {
        id: 6,
        name: "David Njoroge",
        location: "South B",
        rating: 5,
        quote: "The low data mode is a thoughtful feature. I could browse listings even when my data was running low. Shows they understand the local context.",
        image: "/testimonials/david.jpg",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                        }`}
                />
            ))}
        </div>
    );
}

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
                            Testimonials
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-forest] mb-6">
                            Stories from Happy Renters
                        </h1>
                        <p className="text-lg text-gray-600">
                            Hear from real people who found their perfect homes through Nairobi Homes.
                            Their experiences speak louder than any marketing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-[#1B4332]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">5,000+</div>
                            <div className="text-sm text-white/70 mt-1">Happy Renters</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">4.9</div>
                            <div className="text-sm text-white/70 mt-1">Average Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
                            <div className="text-sm text-white/70 mt-1">Would Recommend</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                            <div className="text-sm text-white/70 mt-1">Neighborhoods</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <Card
                                key={testimonial.id}
                                className="bg-white border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-6">
                                    <Quote className="w-8 h-8 text-[--color-forest]/20 mb-4" />
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {testimonial.location}
                                            </div>
                                        </div>
                                        <StarRating rating={testimonial.rating} />
                                    </div>
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
                            Ready to Write Your Story?
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            Join thousands of satisfied renters who found their perfect home with verified water reliability.
                        </p>
                        <Link href="/listings">
                            <Button
                                size="lg"
                                className="bg-white text-[#1B4332] hover:bg-gray-100 h-12 px-8 rounded-full"
                            >
                                Browse Properties
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
