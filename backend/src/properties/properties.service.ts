import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PropertiesService {
  constructor() { } // Removed PrismaService injection

  // Mock Data for MVP Demo
  private mockProperties = [
    {
      id: '1',
      title: 'Luxury Villa in Al Malqa',
      description: 'Modern 5-bedroom villa with pool. Located in the heart of Northern Riyadh.',
      price: 4500000.0,
      type: 'VILLA',
      location: { lat: 24.8123, lng: 46.6231, city: 'Riyadh', address: 'Al Malqa, Riyadh' },
      images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80'],
      features: { bedrooms: 5, bathrooms: 6, area: 450, parking: 2 },
      status: 'PUBLISHED'
    },
    {
      id: '2',
      title: 'Modern Apartment in Jeddah Corniche',
      description: 'Sea view apartment, 3 bedrooms, high floor.',
      price: 1200000.0,
      type: 'APARTMENT',
      location: { lat: 21.6123, lng: 39.1231, city: 'Jeddah', address: 'Ash Shati, Jeddah' },
      images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80'],
      features: { bedrooms: 3, bathrooms: 3, area: 180, parking: 1 },
      status: 'PUBLISHED'
    },
    {
      id: '3',
      title: 'Commercial Land in King Abdullah District',
      description: 'Prime commercial land suitable for office tower.',
      price: 8500000.0,
      type: 'LAND',
      location: { lat: 24.7523, lng: 46.7231, city: 'Riyadh', address: 'King Abdullah Dst, Riyadh' },
      images: ['https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80'],
      features: { area: 1200, zoning: 'Commercial' },
      status: 'PUBLISHED'
    }
  ];

  async create(createPropertyDto: Prisma.PropertyCreateInput) {
    // Mock create
    const newProp = {
      id: Date.now().toString(),
      ...createPropertyDto,
      location: JSON.parse(createPropertyDto.location as string), // Mock handling
      images: JSON.stringify(createPropertyDto.images),
      features: JSON.stringify(createPropertyDto.features),
      status: 'PUBLISHED'
    };
    // this.mockProperties.push(newProp);
    return newProp;
  }

  async findAll(query: { location?: string; type?: string; minPrice?: string; maxPrice?: string }) {
    // Return mock data directly
    return this.mockProperties;
  }

  async findOne(id: string) {
    return this.mockProperties.find(p => p.id === id);
  }
}
