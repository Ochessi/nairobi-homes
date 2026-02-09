"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import {
    Menu,
    X,
    Home,
    Building2,
    LogIn,
    LogOut,
    User,
    Wifi,
    WifiOff,
    ChevronDown,
    FileText,
    Map,
    Droplets,
    Users,
    BarChart3,
    ShieldCheck,
    BookOpen,
    HelpCircle,
    Mail,
    Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLowDataMode } from "./Providers";

// Feature dropdown items
const featuresItems = [
    {
        href: "/listings",
        label: "Listings",
        description: "Browse all available properties",
        icon: FileText
    },
    {
        href: "/listings?neighborhood=all",
        label: "Neighborhoods",
        description: "Explore Nairobi neighborhoods",
        icon: Map
    },
    {
        href: "/listings?filter=water",
        label: "Water Reliability",
        description: "Properties with reliable water supply",
        icon: Droplets
    },
    {
        href: "/testimonials",
        label: "Testimonials",
        description: "Success stories from our clients",
        icon: Users
    },
    {
        href: "/compare",
        label: "Compare Properties",
        description: "Side-by-side property comparison",
        icon: BarChart3
    },
    {
        href: "/verified",
        label: "Verified Homes",
        description: "Verified and inspected properties",
        icon: ShieldCheck
    },
];

// Resources dropdown items
const resourcesItems = [
    {
        href: "/blog",
        label: "Blog",
        description: "Real estate tips and news",
        icon: BookOpen
    },
    {
        href: "/faq",
        label: "FAQ",
        description: "Frequently asked questions",
        icon: HelpCircle
    },
    {
        href: "/contact",
        label: "Contact Us",
        description: "Get in touch with our team",
        icon: Mail
    },
    {
        href: "/about",
        label: "About Us",
        description: "Learn about Nairobi Homes",
        icon: Info
    },
];

export function Navbar() {
    const { data: session, status } = useSession();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { lowDataMode, toggleLowDataMode } = useLowDataMode();
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-[--color-forest] flex items-center justify-center">
                        <Home className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                        Nairobi Homes
                    </span>
                </Link>

                {/* Desktop Navigation - Center */}
                <div className="hidden lg:flex items-center gap-1">
                    {/* Home */}
                    <Link
                        href="/"
                        className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Home
                    </Link>

                    {/* Features Dropdown */}
                    <div
                        className="relative nav-item"
                        onMouseEnter={() => setFeaturesOpen(true)}
                        onMouseLeave={() => setFeaturesOpen(false)}
                    >
                        <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            <span>Features</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Features Dropdown Content */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] p-5 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 ${featuresOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="grid grid-cols-3 gap-4">
                                {featuresItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded-md bg-gray-100 group-hover:bg-[--color-forest]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                                                <Icon className="w-4 h-4 text-gray-600 group-hover:text-[--color-forest]" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-medium text-gray-900 block">{item.label}</span>
                                                <span className="text-xs text-gray-500 mt-0.5 block leading-relaxed">{item.description}</span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Properties */}
                    <Link
                        href="/listings"
                        className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Properties
                    </Link>

                    {/* Resources Dropdown */}
                    <div
                        className="relative nav-item"
                        onMouseEnter={() => setResourcesOpen(true)}
                        onMouseLeave={() => setResourcesOpen(false)}
                    >
                        <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            <span>Resources</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Resources Dropdown Content */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[400px] p-5 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 ${resourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="grid grid-cols-2 gap-4">
                                {resourcesItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded-md bg-gray-100 group-hover:bg-[--color-forest]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                                                <Icon className="w-4 h-4 text-gray-600 group-hover:text-[--color-forest]" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-medium text-gray-900 block">{item.label}</span>
                                                <span className="text-xs text-gray-500 mt-0.5 block leading-relaxed">{item.description}</span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3">
                    {/* Low Data Mode Toggle - Desktop */}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">
                                    {lowDataMode ? (
                                        <WifiOff className="w-4 h-4 text-gray-500" />
                                    ) : (
                                        <Wifi className="w-4 h-4 text-gray-500" />
                                    )}
                                    <Switch
                                        checked={lowDataMode}
                                        onCheckedChange={toggleLowDataMode}
                                        className="data-[state=checked]:bg-[--color-forest]"
                                    />
                                    <span className="text-xs text-gray-500">Low Data</span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Reduce image quality to save data costs</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    {/* Auth Button / User Menu */}
                    {status === "loading" ? (
                        <div className="w-8 h-8 rounded-full bg-gray-100 animate-pulse" />
                    ) : session ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={session.user?.image || undefined} alt={session.user?.name || "User"} />
                                        <AvatarFallback className="bg-[--color-forest] text-white">
                                            {session.user?.name?.charAt(0).toUpperCase() || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <div className="flex items-center gap-2 p-2 border-b">
                                    <User className="w-4 h-4" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium">{session.user?.name}</span>
                                        <span className="text-xs text-gray-500">{session.user?.email}</span>
                                    </div>
                                </div>
                                <DropdownMenuItem
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    className="text-red-600 cursor-pointer"
                                >
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Sign Out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="hidden md:flex items-center gap-2">
                            <Link href="/auth">
                                <Button
                                    variant="outline"
                                    className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 h-9 px-4 text-sm font-medium"
                                >
                                    Sign In
                                </Button>
                            </Link>
                            <Link href="/auth">
                                <Button className="bg-[--color-forest] hover:bg-[--color-forest-light] text-white h-9 px-4 text-sm font-medium">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu */}
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon" className="h-10 w-10">
                                <Menu className="w-5 h-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 p-0">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col h-full">
                                {/* Mobile Header */}
                                <div className="flex items-center justify-between p-4 border-b">
                                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                        <div className="w-8 h-8 rounded-md bg-[--color-forest] flex items-center justify-center">
                                            <Home className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-lg font-semibold text-gray-900">Nairobi Homes</span>
                                    </Link>
                                </div>

                                <div className="flex-1 overflow-y-auto p-4">
                                    {/* Mobile Low Data Mode */}
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 mb-4">
                                        <div className="flex items-center gap-2">
                                            {lowDataMode ? (
                                                <WifiOff className="w-4 h-4 text-gray-500" />
                                            ) : (
                                                <Wifi className="w-4 h-4 text-gray-500" />
                                            )}
                                            <span className="text-sm font-medium text-gray-700">Low Data Mode</span>
                                        </div>
                                        <Switch
                                            checked={lowDataMode}
                                            onCheckedChange={toggleLowDataMode}
                                            className="data-[state=checked]:bg-[--color-forest]"
                                        />
                                    </div>

                                    {/* Mobile Nav Links */}
                                    <div className="space-y-1 mb-4">
                                        <Link
                                            href="/"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <Home className="w-5 h-5 text-gray-500" />
                                            <span className="text-sm font-medium text-gray-900">Home</span>
                                        </Link>
                                        <Link
                                            href="/listings"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <Building2 className="w-5 h-5 text-gray-500" />
                                            <span className="text-sm font-medium text-gray-900">Properties</span>
                                        </Link>
                                    </div>

                                    {/* Mobile Features Section */}
                                    <div className="mb-4">
                                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider px-3 mb-2 block">Features</span>
                                        <div className="space-y-1">
                                            {featuresItems.slice(0, 4).map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                                    >
                                                        <Icon className="w-5 h-5 text-gray-500" />
                                                        <span className="text-sm font-medium text-gray-900">{item.label}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Mobile Resources Section */}
                                    <div>
                                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider px-3 mb-2 block">Resources</span>
                                        <div className="space-y-1">
                                            {resourcesItems.map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                                    >
                                                        <Icon className="w-5 h-5 text-gray-500" />
                                                        <span className="text-sm font-medium text-gray-900">{item.label}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Auth Buttons */}
                                {!session && (
                                    <div className="p-4 border-t space-y-2">
                                        <Link
                                            href="/auth"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block"
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                                            >
                                                Sign In
                                            </Button>
                                        </Link>
                                        <Link
                                            href="/auth"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block"
                                        >
                                            <Button className="w-full bg-[--color-forest] hover:bg-[--color-forest-light] text-white">
                                                Get Started
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
