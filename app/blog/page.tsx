import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
    {
        id: "1",
        title: "Understanding Water Reliability in Nairobi: A Complete Guide",
        excerpt: "Everything you need to know about water supply in different Nairobi neighborhoods, including boreholes, tanks, and city water infrastructure.",
        category: "Guide",
        author: "Nairobi Homes Team",
        date: "2024-02-08",
        readTime: "8 min read",
        image: "/blog/water-guide.jpg",
        featured: true,
    },
    {
        id: "2",
        title: "Top 5 Neighborhoods for Young Professionals in 2024",
        excerpt: "From Kilimani to Westlands, discover the best areas for young professionals looking for convenience, nightlife, and connectivity.",
        category: "Neighborhoods",
        author: "Sarah Wanjiku",
        date: "2024-02-05",
        readTime: "5 min read",
        image: "/blog/neighborhoods.jpg",
        featured: false,
    },
    {
        id: "3",
        title: "How to Spot Fake Rental Listings: Red Flags to Watch For",
        excerpt: "Protect yourself from rental scams with our comprehensive guide to identifying fraudulent listings and shady brokers.",
        category: "Tips",
        author: "James Ochieng",
        date: "2024-02-01",
        readTime: "6 min read",
        image: "/blog/scam-tips.jpg",
        featured: false,
    },
    {
        id: "4",
        title: "Nairobi Expressway: How It's Changing Property Values",
        excerpt: "The new expressway is reshaping the city. Learn how proximity to exit points is affecting rental prices and demand.",
        category: "Market News",
        author: "Michael Kamau",
        date: "2024-01-28",
        readTime: "7 min read",
        image: "/blog/expressway.jpg",
        featured: false,
    },
    {
        id: "5",
        title: "Renting vs. Buying in Nairobi: 2024 Analysis",
        excerpt: "With interest rates and property prices fluctuating, we break down whether it's better to rent or buy in today's market.",
        category: "Market News",
        author: "Nairobi Homes Team",
        date: "2024-01-20",
        readTime: "10 min read",
        image: "/blog/rent-vs-buy.jpg",
        featured: false,
    },
    {
        id: "6",
        title: "First-Time Renter Checklist: What to Inspect Before Signing",
        excerpt: "Moving into your first apartment? Don't miss these crucial inspection points that could save you headaches later.",
        category: "Tips",
        author: "Amina Hassan",
        date: "2024-01-15",
        readTime: "4 min read",
        image: "/blog/checklist.jpg",
        featured: false,
    },
];

const categories = ["All", "Guide", "Neighborhoods", "Tips", "Market News"];

export default function BlogPage() {
    const featuredPost = blogPosts.find((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);

    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
                            Blog
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[--color-forest] mb-4">
                            Real Estate Insights
                        </h1>
                        <p className="text-gray-600">
                            Tips, guides, and market analysis to help you make informed decisions
                            about renting in Nairobi.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-6 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                variant={category === "All" ? "default" : "secondary"}
                                className={`cursor-pointer px-4 py-2 ${category === "All"
                                    ? "bg-[--color-forest] hover:bg-[--color-forest-light]"
                                    : "hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <Card className="bg-white border-gray-100 overflow-hidden">
                            <CardContent className="p-0">
                                <div className="grid md:grid-cols-2">
                                    <div className="relative h-64 md:h-auto bg-gray-200">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] flex items-center justify-center">
                                            <span className="text-white/50 text-sm">Featured Article</span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <Badge className="bg-emerald-100 text-emerald-700 mb-4">
                                            Featured
                                        </Badge>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(featuredPost.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readTime}
                                            </div>
                                        </div>
                                        <Button className="bg-[--color-forest] hover:bg-[--color-forest-light]">
                                            Read Article
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            )}

            {/* Blog Grid */}
            <section className="py-12 pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularPosts.map((post) => (
                            <Card
                                key={post.id}
                                className="bg-white border-gray-100 hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 bg-gray-200 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                            <Tag className="w-8 h-8 text-gray-500" />
                                        </div>
                                        <Badge className="absolute top-3 left-3 bg-white text-gray-700">
                                            {post.category}
                                        </Badge>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <User className="w-3 h-3" />
                                                {post.author}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                            Load More Articles
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-[#1B4332]">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Stay Updated
                        </h2>
                        <p className="text-white/80 mb-6">
                            Get the latest real estate tips and market insights delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 h-12 px-4 rounded-full border-0 focus:ring-2 focus:ring-white/50"
                            />
                            <Button
                                size="lg"
                                className="bg-white text-[#1B4332] hover:bg-gray-100 h-12 px-8 rounded-full"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
