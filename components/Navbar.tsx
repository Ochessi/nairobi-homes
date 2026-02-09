"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X, Home, Building2, LogIn, LogOut, User, Wifi, WifiOff } from "lucide-react";
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

export function Navbar() {
    const { data: session, status } = useSession();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { lowDataMode, toggleLowDataMode } = useLowDataMode();

    const navLinks = [
        { href: "/", label: "Home", icon: Home },
        { href: "/listings", label: "Properties", icon: Building2 },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-[--color-forest] flex items-center justify-center">
                        <Home className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-heading text-xl font-bold text-[--color-forest] hidden sm:block">
                        Nairobi Homes
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3">
                    {/* Low Data Mode Toggle */}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted">
                                    {lowDataMode ? (
                                        <WifiOff className="w-4 h-4 text-muted-foreground" />
                                    ) : (
                                        <Wifi className="w-4 h-4 text-muted-foreground" />
                                    )}
                                    <Switch
                                        checked={lowDataMode}
                                        onCheckedChange={toggleLowDataMode}
                                        className="data-[state=checked]:bg-[--color-forest]"
                                    />
                                    <span className="text-xs text-muted-foreground">Low Data</span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Reduce image quality to save data costs</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    {/* Auth Button / User Menu */}
                    {status === "loading" ? (
                        <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
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
                                        <span className="text-xs text-muted-foreground">{session.user?.email}</span>
                                    </div>
                                </div>
                                <DropdownMenuItem
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    className="text-destructive cursor-pointer"
                                >
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Sign Out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href="/auth">
                            <Button className="bg-[--color-forest] hover:bg-[--color-forest-light] text-white touch-target">
                                <LogIn className="w-4 h-4 mr-2" />
                                Sign In
                            </Button>
                        </Link>
                    )}

                    {/* Mobile Menu */}
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="touch-target">
                                <Menu className="w-6 h-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-6 mt-8">
                                {/* Mobile Low Data Mode */}
                                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                                    <div className="flex items-center gap-2">
                                        {lowDataMode ? (
                                            <WifiOff className="w-5 h-5 text-muted-foreground" />
                                        ) : (
                                            <Wifi className="w-5 h-5 text-muted-foreground" />
                                        )}
                                        <span className="font-medium">Low Data Mode</span>
                                    </div>
                                    <Switch
                                        checked={lowDataMode}
                                        onCheckedChange={toggleLowDataMode}
                                        className="data-[state=checked]:bg-[--color-forest]"
                                    />
                                </div>

                                {/* Mobile Nav Links */}
                                <div className="flex flex-col gap-2">
                                    {navLinks.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted transition-colors touch-target"
                                            >
                                                <Icon className="w-5 h-5" />
                                                <span className="font-medium">{link.label}</span>
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* Mobile Auth */}
                                {!session && (
                                    <Link
                                        href="/auth"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="w-full"
                                    >
                                        <Button className="w-full bg-[--color-forest] hover:bg-[--color-forest-light] text-white touch-target">
                                            <LogIn className="w-4 h-4 mr-2" />
                                            Sign In
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
