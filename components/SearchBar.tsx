"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NAIROBI_NEIGHBORHOODS } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SearchBarProps {
    className?: string;
    size?: "default" | "large";
    placeholder?: string;
}

export function SearchBar({
    className,
    size = "default",
    placeholder = "Search neighborhoods (e.g., Kilimani, Westlands...)"
}: SearchBarProps) {
    const [query, setQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Filter neighborhoods based on query
    const suggestions = query.length > 0
        ? NAIROBI_NEIGHBORHOODS.filter(n =>
            n.toLowerCase().includes(query.toLowerCase())
        )
        : NAIROBI_NEIGHBORHOODS;

    const handleSearch = (neighborhood?: string) => {
        const searchTerm = neighborhood || query;
        if (searchTerm.trim()) {
            router.push(`/listings?neighborhood=${encodeURIComponent(searchTerm)}`);
            setShowSuggestions(false);
            setQuery("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex(prev =>
                prev < suggestions.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
                handleSearch(suggestions[selectedIndex]);
            } else {
                handleSearch();
            }
        } else if (e.key === "Escape") {
            setShowSuggestions(false);
            setSelectedIndex(-1);
        }
    };

    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isLarge = size === "large";

    return (
        <div className={cn("relative w-full", className)} ref={inputRef}>
            <div className={cn(
                "flex items-center gap-2 rounded-xl border border-border bg-background shadow-sm transition-shadow focus-within:shadow-md focus-within:border-[--color-forest]/50",
                isLarge ? "p-2" : "p-1"
            )}>
                <div className={cn(
                    "flex items-center justify-center rounded-lg bg-muted",
                    isLarge ? "w-12 h-12" : "w-10 h-10"
                )}>
                    <MapPin className={cn(
                        "text-[--color-forest]",
                        isLarge ? "w-6 h-6" : "w-5 h-5"
                    )} />
                </div>

                <Input
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowSuggestions(true);
                        setSelectedIndex(-1);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onKeyDown={handleKeyDown}
                    className={cn(
                        "border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0",
                        isLarge ? "text-lg h-12" : "h-10"
                    )}
                />

                <Button
                    onClick={() => handleSearch()}
                    className={cn(
                        "bg-[#1B4332] hover:bg-[#2D6A4F] text-white rounded-lg touch-target",
                        isLarge ? "px-6 h-12" : "px-4 h-10"
                    )}
                >
                    <Search className={isLarge ? "w-5 h-5 mr-2" : "w-4 h-4 sm:mr-2"} />
                    <span className={isLarge ? "" : "hidden sm:inline"}>Search</span>
                </Button>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50">
                    <div className="p-2 text-xs text-muted-foreground border-b">
                        Popular Nairobi neighborhoods
                    </div>
                    <ul className="max-h-64 overflow-y-auto">
                        {suggestions.map((neighborhood, index) => (
                            <li key={neighborhood}>
                                <button
                                    onClick={() => handleSearch(neighborhood)}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted transition-colors touch-target",
                                        index === selectedIndex && "bg-muted"
                                    )}
                                >
                                    <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                    <span className="font-medium">{neighborhood}</span>
                                    <span className="text-sm text-muted-foreground ml-auto">Nairobi</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
