"use client";

import { Droplet, Droplets, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { WaterReliabilityLevel, WATER_RELIABILITY_INFO } from "@/lib/types";
import { cn } from "@/lib/utils";

interface WaterBadgeProps {
    level: WaterReliabilityLevel;
    showTooltip?: boolean;
    size?: "sm" | "md" | "lg";
}

export function WaterBadge({ level, showTooltip = true, size = "md" }: WaterBadgeProps) {
    const info = WATER_RELIABILITY_INFO[level];

    const iconSize = {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5",
    };

    const textSize = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
    };

    const Icon = level === 'essential' ? Droplets : level === 'reliable' ? Droplet : AlertTriangle;

    const colorClasses = {
        essential: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200",
        reliable: "bg-teal-100 text-teal-800 border-teal-200 hover:bg-teal-200",
        variable: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200",
    };

    const badge = (
        <Badge
            variant="outline"
            className={cn(
                "flex items-center gap-1.5 font-medium border transition-colors cursor-help",
                colorClasses[level],
                textSize[size]
            )}
        >
            <Icon className={iconSize[size]} />
            <span>{info.label}</span>
        </Badge>
    );

    if (!showTooltip) {
        return badge;
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {badge}
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                    <p className="font-medium mb-1">Water Reliability: {info.label}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
