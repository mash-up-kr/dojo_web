import type { FC } from "react";
import DefaultProfileImage from "../../assets/images/default-profile.png";
type ImageProps = {
  src?: string;
  alt?: string;
  w?: number;
  h?: number;
  className?: string;
};

const Image: FC<ImageProps> = ({ src, alt, w, h, className }) => {
  return (
    <img
      src={src ?? DefaultProfileImage}
      alt={alt}
      width={w}
      height={h}
      className={`rounded-full ${className}`}
    />
  );
};

export default Image;
