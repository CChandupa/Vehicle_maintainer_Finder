import { NextResponse } from 'next/server';

const sriLankaLocations = {
  provinces: [
    {
      id: "p1",
      name: "Western Province",
      districts: [
        {
          id: "d1",
          name: "Colombo",
          cities: [
            { id: "c1", name: "Colombo 01" },
            { id: "c2", name: "Dehiwala" },
            { id: "c3", name: "Moratuwa" }
          ]
        },
        {
          id: "d2",
          name: "Gampaha",
          cities: [
            { id: "c4", name: "Gampaha" },
            { id: "c5", name: "Negombo" }
          ]
        }
      ]
    },
    {
      id: "p2",
      name: "Central Province",
      districts: [
        {
          id: "d3",
          name: "Kandy",
          cities: [
            { id: "c6", name: "Kandy" },
            { id: "c7", name: "Peradeniya" }
          ]
        }
      ]
    }
  ]
};

export async function GET() {
  return NextResponse.json(sriLankaLocations);
}
