import { Property } from './types';

// Mock property data for Nairobi
export const properties: Property[] = [
    {
        id: '1',
        title: 'Modern 3BR Apartment with Borehole',
        price: 85000,
        location: 'Valley Arcade, Lavington',
        neighborhood: 'Lavington',
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1800,
        type: 'apartment',
        waterReliability: 'essential',
        expresswayProximity: 'moderate',
        images: [
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
        ],
        description: 'Beautiful modern apartment in the heart of Lavington. This property features its own borehole ensuring 24/7 water supply. Spacious living areas with natural light, modern kitchen with granite countertops, and a private balcony overlooking the garden.',
        amenities: ['Borehole', 'Parking', 'Security 24/7', 'Gym', 'Swimming Pool', 'Backup Generator'],
        verified: true,
        createdAt: '2024-01-15',
    },
    {
        id: '2',
        title: 'Cozy 2BR in Kilimani',
        price: 65000,
        location: 'Argwings Kodhek Road, Kilimani',
        neighborhood: 'Kilimani',
        bedrooms: 2,
        bathrooms: 1,
        sqft: 1200,
        type: 'apartment',
        waterReliability: 'reliable',
        expresswayProximity: 'near',
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
            'https://images.unsplash.com/photo-1630699144867-37acb0e1b194?w=800',
        ],
        description: 'Well-maintained apartment in prime Kilimani location. Walking distance to Yaya Centre and multiple restaurants. The building has a large water tank that provides reliable backup during rationing periods.',
        amenities: ['Water Tank', 'Parking', 'Security', 'CCTV', 'Lift'],
        verified: true,
        createdAt: '2024-01-20',
    },
    {
        id: '3',
        title: 'Spacious 4BR Family Home in Karen',
        price: 250000,
        location: 'Karen Road, Karen',
        neighborhood: 'Karen',
        bedrooms: 4,
        bathrooms: 3,
        sqft: 3500,
        type: 'house',
        waterReliability: 'essential',
        expresswayProximity: 'far',
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
        ],
        description: 'Stunning family home set on a half-acre compound in serene Karen. Features a private borehole, mature garden, and domestic staff quarters. Perfect for families seeking peace and space within Nairobi.',
        amenities: ['Borehole', 'Large Garden', 'DSQ', 'Parking for 4 cars', 'Electric Fence', 'Guard House'],
        verified: true,
        createdAt: '2024-01-25',
    },
    {
        id: '4',
        title: 'Studio Apartment in Westlands',
        price: 35000,
        location: 'Ring Road, Westlands',
        neighborhood: 'Westlands',
        bedrooms: 1,
        bathrooms: 1,
        sqft: 450,
        type: 'studio',
        waterReliability: 'variable',
        expresswayProximity: 'near',
        images: [
            'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800',
        ],
        description: 'Compact and efficient studio perfect for young professionals. Located in the heart of Westlands with easy access to Sarit Centre and the Nairobi Expressway. Note: Water supply is dependent on city water schedule.',
        amenities: ['Parking', 'Security', 'WiFi Ready'],
        verified: true,
        createdAt: '2024-02-01',
    },
    {
        id: '5',
        title: 'Elegant 3BR Townhouse in Kileleshwa',
        price: 120000,
        location: 'Othaya Road, Kileleshwa',
        neighborhood: 'Kileleshwa',
        bedrooms: 3,
        bathrooms: 2,
        sqft: 2200,
        type: 'townhouse',
        waterReliability: 'reliable',
        expresswayProximity: 'moderate',
        images: [
            'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
        ],
        description: 'Beautifully designed townhouse in a gated community. Features modern finishes, private garden, and communal amenities. The development has significant water storage capacity ensuring reliable supply.',
        amenities: ['Community Pool', 'Playground', 'Water Storage', 'Parking', '24/7 Security'],
        verified: true,
        createdAt: '2024-02-05',
    },
    {
        id: '6',
        title: 'Affordable 1BR in Pangani',
        price: 25000,
        location: 'Juja Road, Pangani',
        neighborhood: 'Pangani',
        bedrooms: 1,
        bathrooms: 1,
        sqft: 550,
        type: 'apartment',
        waterReliability: 'variable',
        expresswayProximity: 'near',
        images: [
            'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800',
        ],
        description: 'Budget-friendly apartment in redeveloped Pangani. Close to CBD and well-connected by public transport. Great for first-time renters. Water supply follows city rationing schedule.',
        amenities: ['Parking', 'Security'],
        verified: true,
        createdAt: '2024-02-10',
    },
    {
        id: '7',
        title: 'Luxury Penthouse in Upperhill',
        price: 350000,
        location: 'Elgon Road, Upperhill',
        neighborhood: 'Upperhill',
        bedrooms: 4,
        bathrooms: 4,
        sqft: 4000,
        type: 'apartment',
        waterReliability: 'essential',
        expresswayProximity: 'near',
        images: [
            'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
        ],
        description: 'Exclusive penthouse with panoramic views of Nairobi National Park. State-of-the-art smart home features, private rooftop terrace, and dedicated water system. Direct access to Nairobi Expressway.',
        amenities: ['Borehole', 'Smart Home', 'Rooftop Terrace', 'Private Lift', 'Staff Quarters', 'Wine Cellar'],
        verified: true,
        createdAt: '2024-02-15',
    },
    {
        id: '8',
        title: '2BR Garden Apartment in South C',
        price: 55000,
        location: 'Mugoya Estate, South C',
        neighborhood: 'South C',
        bedrooms: 2,
        bathrooms: 1,
        sqft: 1100,
        type: 'apartment',
        waterReliability: 'reliable',
        expresswayProximity: 'moderate',
        images: [
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
        ],
        description: 'Charming ground floor apartment with private garden access. Family-friendly estate with good schools nearby. Building has reliable water storage system.',
        amenities: ['Garden', 'Parking', 'Security', 'Water Tank'],
        verified: true,
        createdAt: '2024-02-20',
    },
];

// Get property by ID
export function getPropertyById(id: string): Property | undefined {
    return properties.find(p => p.id === id);
}

// Get all unique neighborhoods from properties
export function getActiveNeighborhoods(): string[] {
    return [...new Set(properties.map(p => p.neighborhood))];
}

// Filter properties
export function filterProperties(options: {
    neighborhood?: string;
    priceMin?: number;
    priceMax?: number;
    bedrooms?: number;
    type?: string[];
    waterReliability?: string[];
    expresswayProximity?: string[];
}): Property[] {
    return properties.filter(property => {
        if (options.neighborhood && property.neighborhood !== options.neighborhood) {
            return false;
        }
        if (options.priceMin && property.price < options.priceMin) {
            return false;
        }
        if (options.priceMax && property.price > options.priceMax) {
            return false;
        }
        if (options.bedrooms && property.bedrooms < options.bedrooms) {
            return false;
        }
        if (options.type && options.type.length > 0 && !options.type.includes(property.type)) {
            return false;
        }
        if (options.waterReliability && options.waterReliability.length > 0 && !options.waterReliability.includes(property.waterReliability)) {
            return false;
        }
        if (options.expresswayProximity && options.expresswayProximity.length > 0 && !options.expresswayProximity.includes(property.expresswayProximity)) {
            return false;
        }
        return true;
    });
}

// Format price in KES
export function formatPrice(price: number): string {
    return `KES ${price.toLocaleString()}`;
}
