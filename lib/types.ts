// Property Types
export type WaterReliabilityLevel = 'essential' | 'reliable' | 'variable';

export interface Property {
    id: string;
    title: string;
    price: number;
    location: string;
    neighborhood: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    type: 'apartment' | 'house' | 'townhouse' | 'studio';
    waterReliability: WaterReliabilityLevel;
    expresswayProximity: 'near' | 'moderate' | 'far'; // Distance to Nairobi Expressway
    images: string[];
    description: string;
    amenities: string[];
    verified: boolean;
    createdAt: string;
}

export interface FilterOptions {
    priceMin?: number;
    priceMax?: number;
    bedrooms?: number;
    type?: Property['type'][];
    waterReliability?: WaterReliabilityLevel[];
    expresswayProximity?: Property['expresswayProximity'][];
    neighborhood?: string[];
}

// Nairobi neighborhoods with common real estate activity
export const NAIROBI_NEIGHBORHOODS = [
    'Kilimani',
    'Westlands',
    'Pangani',
    'Lavington',
    'Karen',
    'Kileleshwa',
    'Runda',
    'Muthaiga',
    'South B',
    'South C',
    'Parklands',
    'Langata',
    'Upperhill',
    'Hurlingham',
    'Ngong Road',
] as const;

export type NairobiNeighborhood = typeof NAIROBI_NEIGHBORHOODS[number];

// Water reliability descriptions
export const WATER_RELIABILITY_INFO: Record<WaterReliabilityLevel, { label: string; description: string; color: string }> = {
    essential: {
        label: 'Essential Supply',
        description: 'This property has its own borehole or water tank. Reliable 24/7 supply guaranteed.',
        color: 'emerald',
    },
    reliable: {
        label: 'Reliable',
        description: 'Connected to main water supply with backup storage. Occasional rationing may occur.',
        color: 'teal',
    },
    variable: {
        label: 'Variable',
        description: 'Dependent on city supply. Water may be unavailable during shortage periods.',
        color: 'amber',
    },
};

// House type labels
export const HOUSE_TYPE_LABELS: Record<Property['type'], string> = {
    apartment: 'Apartment',
    house: 'House',
    townhouse: 'Townhouse',
    studio: 'Studio',
};

// Expressway proximity labels
export const EXPRESSWAY_PROXIMITY_LABELS: Record<Property['expresswayProximity'], string> = {
    near: 'Near Expressway (< 2km)',
    moderate: 'Moderate (2-5km)',
    far: 'Far from Expressway (> 5km)',
};
