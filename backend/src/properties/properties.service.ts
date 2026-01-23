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
      title: 'Al-Hamra Villas Project (مشروع حمراء الاسد)',
      description: 'Modern 6-room villas with 300m² area. Located in Hamra Al-Asad district, Al Madinah. Features separate guest reception and family halls.',
      price: 1150000.0,
      type: 'VILLA',
      location: { lat: 24.46, lng: 39.61, city: 'Al Madinah', address: 'Hamra Al-Asad, Al Madinah' },
      images: ['https://alsika.alsikkarealest.com/storage/images/projects/sUVBQE6J0G5wX4ICFo6JZnE9aQy4dPuQa96xTr90.jpg'],
      features: { bedrooms: 5, bathrooms: 5, area: 300, parking: 2 },
      status: 'PUBLISHED'
    },
    {
      id: '2',
      title: 'Al-Tilal Apartments Project (مشروع الرانوناء)',
      description: 'Luxury apartments in Al Tilal district. 5 Rooms, 250m² spacious living. Close to major amenities.',
      price: 650000.0,
      type: 'APARTMENT',
      location: { lat: 24.44, lng: 39.59, city: 'Al Madinah', address: 'Al Tilal (Ranuna), Al Madinah' },
      images: ['https://alsika.alsikkarealest.com/storage/images/projects/dii9NUJXwOfW6ldAWWtkVayFTJaRincezaMu0Mjm.jpg'],
      features: { bedrooms: 3, bathrooms: 3, area: 250, parking: 1 },
      status: 'PUBLISHED'
    },
    {
      id: '3',
      title: 'Al-Mudaifer Villas Project (مشروع فلل المديفر)',
      description: 'Premium villas in Al-Salam District. High-end finishing, 300m² build area. Ideal for families.',
      price: 1100000.0,
      type: 'VILLA',
      location: { lat: 24.48, lng: 39.55, city: 'Al Madinah', address: 'Al-Salam District, Al Madinah' },
      images: ['https://alsika.alsikkarealest.com/storage/images/projects/23upPduTMH3K1zIiA9awRPxBxWbig1osiy9BP8J4.jpg'],
      features: { bedrooms: 5, bathrooms: 5, area: 300, parking: 2 },
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
