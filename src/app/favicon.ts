// This isn't working correctly, we'll use a simpler approach

import { MetadataRoute } from 'next';

// Use your profile image as favicon
export default function Favicon(): MetadataRoute.Favicon {
  return {
    icon: '/Asset/ayush.jpg',
    shortcut: '/Asset/ayush.jpg',
    apple: '/Asset/ayush.jpg',
  };
} 