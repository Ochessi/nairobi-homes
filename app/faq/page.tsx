"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqCategories = [
    {
        name: "Renting Process",
        questions: [
            {
                question: "How do I book a property viewing?",
                answer: "You can book a viewing directly through any property listing page by clicking the 'Schedule Viewing' button. Select your preferred date and time, and we'll confirm within 2 hours. No booking fees required!",
            },
            {
                question: "What documents do I need to rent a property?",
                answer: "Typically you'll need: a valid National ID or passport, proof of income (pay slips or bank statements), and a reference letter from your employer. Some landlords may require additional documents.",
            },
            {
                question: "Is there a security deposit required?",
                answer: "Yes, most properties require a security deposit equivalent to 1-2 months' rent. This is refundable at the end of your tenancy, minus any damages beyond normal wear and tear.",
            },
            {
                question: "How long does the application process take?",
                answer: "Once you submit your documents, most applications are processed within 24-48 hours. If approved, you can sign the lease and move in as soon as the unit is available.",
            },
        ],
    },
    {
        name: "Water Reliability",
        questions: [
            {
                question: "What do the water reliability ratings mean?",
                answer: "Essential: Property has a borehole with 24/7 water availability. Reliable: Has storage tanks and regular city water supply. Variable: Depends primarily on city water which can be inconsistent.",
            },
            {
                question: "How do you verify water reliability?",
                answer: "Our team conducts on-site inspections, tests water pressure, checks storage tank capacity, and interviews current tenants or neighbors about their water experience.",
            },
            {
                question: "Can water reliability change over time?",
                answer: "Yes, it can. We re-verify properties periodically and update ratings if conditions change. You can also report issues through your tenant dashboard.",
            },
        ],
    },
    {
        name: "Verification",
        questions: [
            {
                question: "What does 'verified' mean on a listing?",
                answer: "Verified listings have been physically inspected by our team. We confirm the property exists, photos are accurate, the landlord is legitimate, and all stated amenities are present.",
            },
            {
                question: "How can I tell if a listing is verified?",
                answer: "Verified listings display a green shield badge. You can click on it to see the verification date and what was checked during the inspection.",
            },
            {
                question: "What if I find inaccuracies in a verified listing?",
                answer: "Please report it immediately through the listing page. We take accuracy seriously and will investigate within 24 hours. If confirmed, we'll update the listing and may remove it entirely.",
            },
        ],
    },
    {
        name: "Payments & Fees",
        questions: [
            {
                question: "Does Nairobi Homes charge any fees?",
                answer: "Browsing and viewing properties is completely free. We charge landlords a small listing fee. Tenants only pay their rent and deposit directly to the landlord.",
            },
            {
                question: "Can I pay rent through the platform?",
                answer: "Currently, rent payments are made directly to landlords. We're working on an integrated payment system that will launch soon, offering M-Pesa and bank transfer options.",
            },
            {
                question: "Are there any broker fees?",
                answer: "No! We connect you directly with landlords. One of our core missions is eliminating the hidden broker fees that plague Nairobi's rental market.",
            },
        ],
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors rounded-lg px-4 -mx-4"
            >
                <span className="font-medium text-gray-900 pr-4">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            {isOpen && (
                <div className="pb-4 px-4 -mx-4">
                    <p className="text-gray-600 leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-full bg-[--color-forest]/10 flex items-center justify-center mx-auto mb-6">
                            <HelpCircle className="w-8 h-8 text-[--color-forest]" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[--color-forest] mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Find answers to common questions about renting, water reliability,
                            verification, and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto space-y-12">
                        {faqCategories.map((category) => (
                            <div key={category.name}>
                                <h2 className="text-xl font-bold text-[--color-forest] mb-6">
                                    {category.name}
                                </h2>
                                <Card className="bg-white border-gray-100">
                                    <CardContent className="p-6">
                                        {category.questions.map((item, index) => (
                                            <FAQItem
                                                key={index}
                                                question={item.question}
                                                answer={item.answer}
                                            />
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="py-16 md:py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                            <MessageCircle className="w-8 h-8 text-amber-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[--color-forest] mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Can't find the answer you're looking for? Our support team is here to help.
                            Reach out and we'll get back to you within 24 hours.
                        </p>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-[--color-forest] hover:bg-[--color-forest-light] h-12 px-8 rounded-full"
                            >
                                Contact Support
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
