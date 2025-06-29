import { getTransformedImageUrl, parseSupabaseUrl } from "../../../utils/imageTransform";

type TransformedImageProps = {
  src:string,
  alt:string,
  width:number,
  height:number,
  className:string,
  quality:number,
  resize:'cover' | 'contain' | 'fill',
}

function TransformedImage({
  src,
  alt,
  width,
  height,
  className,
  quality = 80,
  resize = "cover",
}: TransformedImageProps) {
  // If src is not a Supabase URL, return regular image
  if (!src || !src.includes("supabase.co")) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  const { bucketName, imagePath } = parseSupabaseUrl(src);

  // If parsing failed, fall back to original URL
  if (!bucketName || !imagePath) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  const transformedSrc = getTransformedImageUrl(bucketName, imagePath, {
    width,
    height,
    quality,
    resize,
  });

  return (
    <img
      src={transformedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

export default TransformedImage; 