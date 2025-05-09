import { supabase } from './supabase';

export function getTransformedImageUrl(bucketName, imagePath, options = {}) {
  return supabase.storage
    .from(bucketName)
    .getPublicUrl(imagePath, {
      transform: {
        width: options.width,
        height: options.height,
        quality: options.quality || 80,
        resize: options.resize || 'cover',
      },
    }).data.publicUrl;
}

export function parseSupabaseUrl(fullUrl) {
  if (!fullUrl) return { bucketName: null, imagePath: null };
  
  try {
    // Handle URLs in format: https://[project-ref].supabase.co/storage/v1/object/public/[bucket]/[path]
    const urlObj = new URL(fullUrl);
    const pathParts = urlObj.pathname.split('/');
    
    // Find the index of 'public' which comes before the bucket name
    const publicIndex = pathParts.findIndex(part => part === 'public');
    
    if (publicIndex !== -1 && publicIndex + 1 < pathParts.length) {
      const bucketName = pathParts[publicIndex + 1];
      // Everything after the bucket name is the image path
      const imagePath = pathParts.slice(publicIndex + 2).join('/');
      return { bucketName, imagePath };
    }
    
    return { bucketName: null, imagePath: null };
  } catch (error) {
    console.error('Error parsing Supabase URL:', error);
    return { bucketName: null, imagePath: null };
  }
} 