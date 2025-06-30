import { NextRequest, NextResponse } from 'next/server';
import { getUserLayer } from '@/utils/ContentFilter';

export async function GET(request: NextRequest) {
  try {
    const userLayer = await getUserLayer();
    const isBlack = userLayer === 3;
    
    return NextResponse.json({ 
      isBlack,
      userLayer,
      success: true 
    });
  } catch (error) {
    console.error('Error getting content type:', error);
    return NextResponse.json({ 
      isBlack: false,
      userLayer: 1,
      success: false,
      error: 'Failed to determine content type'
    });
  }
} 