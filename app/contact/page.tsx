"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        details: ["+254 700 123 456", "+254 733 987 654"],
    },
    {
        icon: Mail,
        title: "Email",
        details: ["hello@nairobihomes.co.ke", "support@nairobihomes.co.ke"],
    },
    {
        icon: MapPin,
        title: "Office",
        details: ["Westlands Business Park", "3rd Floor, Suite 305", "Nairobi, Kenya"],
    },
    {
        icon: Clock,
        title: "Hours",
        details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM", "Sun: Closed"],
    },
];

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-forest] mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-gray-600">
                            Have questions about renting, listing your property, or our verification process?
                            We're here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <h2 className="text-xl font-bold text-[--color-forest] mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                {contactInfo.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.title} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-[--color-forest]/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-5 h-5 text-[--color-forest]" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900 mb-1">
                                                    {item.title}
                                                </div>
                                                {item.details.map((detail, index) => (
                                                    <div key={index} className="text-sm text-gray-600">
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Map placeholder */}
                            <div className="mt-8 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                                <MapPin className="w-8 h-8 text-gray-400" />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="bg-white border-gray-100">
                                <CardContent className="p-8">
                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                Message Sent!
                                            </h3>
                                            <p className="text-gray-600 mb-6">
                                                Thank you for reaching out. We'll get back to you within 24 hours.
                                            </p>
                                            <Button
                                                variant="outline"
                                                onClick={() => {
                                                    setIsSubmitted(false);
                                                    setFormState({
                                                        name: "",
                                                        email: "",
                                                        phone: "",
                                                        subject: "",
                                                        message: "",
                                                    });
                                                }}
                                            >
                                                Send Another Message
                                            </Button>
                                        </div>
                                    ) : (
                                        <>
                                            <h2 className="text-xl font-bold text-[--color-forest] mb-6">
                                                Send Us a Message
                                            </h2>
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid sm:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="name">Full Name *</Label>
                                                        <Input
                                                            id="name"
                                                            required
                                                            value={formState.name}
                                                            onChange={(e) =>
                                                                setFormState({ ...formState, name: e.target.value })
                                                            }
                                                            placeholder="John Doe"
                                                            className="h-12"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="email">Email Address *</Label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            required
                                                            value={formState.email}
                                                            onChange={(e) =>
                                                                setFormState({ ...formState, email: e.target.value })
                                                            }
                                                            placeholder="john@example.com"
                                                            className="h-12"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="phone">Phone Number</Label>
                                                        <Input
                                                            id="phone"
                                                            value={formState.phone}
                                                            onChange={(e) =>
                                                                setFormState({ ...formState, phone: e.target.value })
                                                            }
                                                            placeholder="+254 700 000 000"
                                                            className="h-12"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="subject">Subject *</Label>
                                                        <Input
                                                            id="subject"
                                                            required
                                                            value={formState.subject}
                                                            onChange={(e) =>
                                                                setFormState({ ...formState, subject: e.target.value })
                                                            }
                                                            placeholder="Property inquiry"
                                                            className="h-12"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="message">Message *</Label>
                                                    <Textarea
                                                        id="message"
                                                        required
                                                        value={formState.message}
                                                        onChange={(e) =>
                                                            setFormState({ ...formState, message: e.target.value })
                                                        }
                                                        placeholder="Tell us how we can help you..."
                                                        rows={6}
                                                    />
                                                </div>

                                                <Button
                                                    type="submit"
                                                    size="lg"
                                                    className="bg-[--color-forest] hover:bg-[--color-forest-light] h-12 px-8"
                                                >
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Send Message
                                                </Button>
                                            </form>
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gray-600">
                            Looking for quick answers?{" "}
                            <a href="/faq" className="text-[--color-forest] font-medium hover:underline">
                                Check our FAQ
                            </a>{" "}
                            or browse{" "}
                            <a href="/listings" className="text-[--color-forest] font-medium hover:underline">
                                available properties
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
