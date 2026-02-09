"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLowDataMode } from "@/components/Providers";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
    images: string[];
    title: string;
}

export function PhotoGallery({ images, title }: PhotoGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const { lowDataMode } = useLowDataMode();

    const getImageUrl = (url: string) => {
        if (lowDataMode) {
            return url.replace('w=800', 'w=400');
        }
        return url;
    };

    const goToPrevious = () => {
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (images.length === 0) {
        return (
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <p className="text-muted-foreground">No images available</p>
            </div>
        );
    }

    return (
        <>
            <div className="space-y-4">
                {/* Main Image */}
                <div
                    className="relative aspect-video rounded-xl overflow-hidden bg-muted cursor-pointer group"
                    onClick={() => setIsFullscreen(true)}
                >
                    <Image
                        src={getImageUrl(images[currentIndex])}
                        alt={`${title} - Image ${currentIndex + 1}`}
                        fill
                        className={cn(
                            "object-cover transition-transform duration-300 group-hover:scale-105",
                            lowDataMode && "image-rendering-pixelated"
                        )}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                    />

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity touch-target"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity touch-target"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1.5 rounded-full">
                        {currentIndex + 1} / {images.length}
                    </div>

                    {/* View Fullscreen hint */}
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to view fullscreen
                    </div>
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={cn(
                                    "relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all",
                                    index === currentIndex
                                        ? "border-[--color-forest] ring-2 ring-[--color-forest]/30"
                                        : "border-transparent hover:border-border"
                                )}
                            >
                                <Image
                                    src={getImageUrl(image).replace('w=800', 'w=100').replace('w=400', 'w=100')}
                                    alt={`${title} thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Fullscreen Dialog */}
            <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-none">
                    <div className="relative w-full h-[90vh]">
                        <Image
                            src={images[currentIndex]}
                            alt={`${title} - Image ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="95vw"
                        />

                        {/* Close Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsFullscreen(false)}
                            className="absolute top-4 right-4 text-white hover:bg-white/20 touch-target"
                        >
                            <X className="w-6 h-6" />
                        </Button>

                        {/* Navigation */}
                        {images.length > 1 && (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={goToPrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 touch-target"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={goToNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 touch-target"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </Button>
                            </>
                        )}

                        {/* Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-full">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
