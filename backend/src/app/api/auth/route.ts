import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    // Very basic mock login
    if (email && password) {
      return NextResponse.json({
        token: "mock-jwt-token-12345",
        user: {
          id: "u1",
          email: email,
          name: "Test User",
          role: "DRIVER" // or PROVIDER
        }
      });
    }
    
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
