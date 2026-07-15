import { NextResponse } from 'next/server';

const mockProviders = [
  {
    id: "sp1",
    name: "Sunil Fernando",
    businessName: "Sunil Auto Repairs",
    type: "MAINTENANCE",
    contact: "0771234567",
    location: {
      provinceId: "p1",
      districtId: "d1",
      cityId: "c1",
      address: "123 Main St, Colombo 01"
    },
    rating: 4.5,
    isAvailable: true
  },
  {
    id: "sp2",
    name: "Kamal Perera",
    businessName: "Kamal Towing Services",
    type: "TRANSPORTATION",
    contact: "0719876543",
    location: {
      provinceId: "p1",
      districtId: "d1",
      cityId: "c2",
      address: "45 Galle Rd, Dehiwala"
    },
    rating: 4.8,
    isAvailable: true
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityId = searchParams.get('cityId');
  const type = searchParams.get('type');
  
  let filteredProviders = mockProviders;
  
  if (cityId) {
    filteredProviders = filteredProviders.filter(p => p.location.cityId === cityId);
  }
  
  if (type) {
    filteredProviders = filteredProviders.filter(p => p.type === type);
  }

  return NextResponse.json(filteredProviders);
}
