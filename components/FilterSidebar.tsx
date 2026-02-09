"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Filter, X, ChevronDown, ChevronUp, Car, Droplet, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
    HOUSE_TYPE_LABELS,
    EXPRESSWAY_PROXIMITY_LABELS,
    WATER_RELIABILITY_INFO,
    WaterReliabilityLevel
} from "@/lib/types";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
    className?: string;
}

export function FilterSidebar({ className }: FilterSidebarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Filter state
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedWater, setSelectedWater] = useState<string[]>([]);
    const [selectedExpressway, setSelectedExpressway] = useState<string[]>([]);
    const [minBedrooms, setMinBedrooms] = useState<number>(0);

    // Collapsible sections
    const [openSections, setOpenSections] = useState({
        price: true,
        type: true,
        water: true,
        expressway: false,
    });

    // Count active filters
    const activeFilterCount = [
        priceRange[0] > 0 || priceRange[1] < 500000,
        selectedTypes.length > 0,
        selectedWater.length > 0,
        selectedExpressway.length > 0,
        minBedrooms > 0,
    ].filter(Boolean).length;

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleTypeChange = (type: string, checked: boolean) => {
        setSelectedTypes(prev =>
            checked ? [...prev, type] : prev.filter(t => t !== type)
        );
    };

    const handleWaterChange = (level: string, checked: boolean) => {
        setSelectedWater(prev =>
            checked ? [...prev, level] : prev.filter(l => l !== level)
        );
    };

    const handleExpresswayChange = (proximity: string, checked: boolean) => {
        setSelectedExpressway(prev =>
            checked ? [...prev, proximity] : prev.filter(p => p !== proximity)
        );
    };

    const applyFilters = () => {
        const params = new URLSearchParams(searchParams.toString());

        if (priceRange[0] > 0) params.set('priceMin', priceRange[0].toString());
        else params.delete('priceMin');

        if (priceRange[1] < 500000) params.set('priceMax', priceRange[1].toString());
        else params.delete('priceMax');

        if (selectedTypes.length > 0) params.set('type', selectedTypes.join(','));
        else params.delete('type');

        if (selectedWater.length > 0) params.set('water', selectedWater.join(','));
        else params.delete('water');

        if (selectedExpressway.length > 0) params.set('expressway', selectedExpressway.join(','));
        else params.delete('expressway');

        if (minBedrooms > 0) params.set('bedrooms', minBedrooms.toString());
        else params.delete('bedrooms');

        router.push(`/listings?${params.toString()}`);
    };

    const clearFilters = () => {
        setPriceRange([0, 500000]);
        setSelectedTypes([]);
        setSelectedWater([]);
        setSelectedExpressway([]);
        setMinBedrooms(0);

        const params = new URLSearchParams();
        const neighborhood = searchParams.get('neighborhood');
        if (neighborhood) params.set('neighborhood', neighborhood);

        router.push(`/listings?${params.toString()}`);
    };

    // Load filters from URL on mount
    useEffect(() => {
        const priceMin = searchParams.get('priceMin');
        const priceMax = searchParams.get('priceMax');
        const types = searchParams.get('type');
        const water = searchParams.get('water');
        const expressway = searchParams.get('expressway');
        const bedrooms = searchParams.get('bedrooms');

        if (priceMin || priceMax) {
            setPriceRange([
                priceMin ? parseInt(priceMin) : 0,
                priceMax ? parseInt(priceMax) : 500000
            ]);
        }
        if (types) setSelectedTypes(types.split(','));
        if (water) setSelectedWater(water.split(','));
        if (expressway) setSelectedExpressway(expressway.split(','));
        if (bedrooms) setMinBedrooms(parseInt(bedrooms));
    }, [searchParams]);

    const filterContent = (
        <div className="space-y-6">
            {/* Price Range */}
            <div>
                <button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full py-2 font-medium"
                >
                    <span>Price Range (KES/month)</span>
                    {openSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openSections.price && (
                    <div className="mt-4 space-y-4">
                        <Slider
                            value={priceRange}
                            onValueChange={(value) => setPriceRange(value as [number, number])}
                            min={0}
                            max={500000}
                            step={5000}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm">
                            <span>KES {priceRange[0].toLocaleString()}</span>
                            <span>KES {priceRange[1].toLocaleString()}</span>
                        </div>
                    </div>
                )}
            </div>

            <Separator />

            {/* Bedrooms */}
            <div>
                <Label className="text-base font-medium">Minimum Bedrooms</Label>
                <div className="flex gap-2 mt-3">
                    {[0, 1, 2, 3, 4].map(num => (
                        <Button
                            key={num}
                            variant={minBedrooms === num ? "default" : "outline"}
                            size="sm"
                            onClick={() => setMinBedrooms(num)}
                            className={cn(
                                "touch-target",
                                minBedrooms === num && "bg-[--color-forest] hover:bg-[--color-forest-light]"
                            )}
                        >
                            {num === 0 ? 'Any' : `${num}+`}
                        </Button>
                    ))}
                </div>
            </div>

            <Separator />

            {/* House Type */}
            <div>
                <button
                    onClick={() => toggleSection('type')}
                    className="flex items-center justify-between w-full py-2 font-medium"
                >
                    <div className="flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        <span>House Type</span>
                    </div>
                    {openSections.type ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openSections.type && (
                    <div className="mt-3 space-y-3">
                        {Object.entries(HOUSE_TYPE_LABELS).map(([value, label]) => (
                            <div key={value} className="flex items-center space-x-3">
                                <Checkbox
                                    id={`type-${value}`}
                                    checked={selectedTypes.includes(value)}
                                    onCheckedChange={(checked) => handleTypeChange(value, checked as boolean)}
                                    className="touch-target"
                                />
                                <Label htmlFor={`type-${value}`} className="cursor-pointer">
                                    {label}
                                </Label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Separator />

            {/* Water Reliability */}
            <div>
                <button
                    onClick={() => toggleSection('water')}
                    className="flex items-center justify-between w-full py-2 font-medium"
                >
                    <div className="flex items-center gap-2">
                        <Droplet className="w-4 h-4 text-teal-600" />
                        <span>Water Reliability</span>
                    </div>
                    {openSections.water ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openSections.water && (
                    <div className="mt-3 space-y-3">
                        {(Object.keys(WATER_RELIABILITY_INFO) as WaterReliabilityLevel[]).map((level) => (
                            <div key={level} className="flex items-center space-x-3">
                                <Checkbox
                                    id={`water-${level}`}
                                    checked={selectedWater.includes(level)}
                                    onCheckedChange={(checked) => handleWaterChange(level, checked as boolean)}
                                    className="touch-target"
                                />
                                <Label htmlFor={`water-${level}`} className="cursor-pointer flex items-center gap-2">
                                    {WATER_RELIABILITY_INFO[level].label}
                                </Label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Separator />

            {/* Nairobi Expressway Proximity */}
            <div>
                <button
                    onClick={() => toggleSection('expressway')}
                    className="flex items-center justify-between w-full py-2 font-medium"
                >
                    <div className="flex items-center gap-2">
                        <Car className="w-4 h-4" />
                        <span>Expressway Proximity</span>
                    </div>
                    {openSections.expressway ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openSections.expressway && (
                    <div className="mt-3 space-y-3">
                        {Object.entries(EXPRESSWAY_PROXIMITY_LABELS).map(([value, label]) => (
                            <div key={value} className="flex items-center space-x-3">
                                <Checkbox
                                    id={`expressway-${value}`}
                                    checked={selectedExpressway.includes(value)}
                                    onCheckedChange={(checked) => handleExpresswayChange(value, checked as boolean)}
                                    className="touch-target"
                                />
                                <Label htmlFor={`expressway-${value}`} className="cursor-pointer text-sm">
                                    {label}
                                </Label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="flex gap-3">
                <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="flex-1 touch-target"
                >
                    Clear
                </Button>
                <Button
                    onClick={applyFilters}
                    className="flex-1 bg-[--color-forest] hover:bg-[--color-forest-light] text-white touch-target"
                >
                    Apply Filters
                </Button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className={cn("hidden lg:block w-80 shrink-0", className)}>
                <div className="sticky top-24 p-6 bg-card rounded-xl border border-border shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-heading text-lg font-semibold flex items-center gap-2">
                            <Filter className="w-5 h-5" />
                            Filters
                        </h2>
                        {activeFilterCount > 0 && (
                            <Badge className="bg-[--color-forest] text-white">
                                {activeFilterCount} active
                            </Badge>
                        )}
                    </div>
                    {filterContent}
                </div>
            </aside>

            {/* Mobile Filter Sheet */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="touch-target">
                            <Filter className="w-4 h-4 mr-2" />
                            Filters
                            {activeFilterCount > 0 && (
                                <Badge className="ml-2 bg-[--color-forest] text-white">
                                    {activeFilterCount}
                                </Badge>
                            )}
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full sm:max-w-md overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="flex items-center gap-2">
                                <Filter className="w-5 h-5" />
                                Filters
                            </SheetTitle>
                        </SheetHeader>
                        <div className="mt-6">
                            {filterContent}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
