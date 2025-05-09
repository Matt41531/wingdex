import PropTypes from "prop-types";
import { getTransformedImageUrl, parseSupabaseUrl } from "../../../utils/imageTransform";

function TransformedImage({
  src,
  alt,
  width,
  height,
  className,
  quality = 80,
  resize = "cover",
}) {
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

TransformedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  quality: PropTypes.number,
  resize: PropTypes.oneOf(["cover", "contain", "fill"]),
};

export default TransformedImage; 