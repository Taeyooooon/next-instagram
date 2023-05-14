type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

interface Props {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
}
interface ImageSizeStyle {
  container: string;
  image: string;
}

const Avatar = ({ image, size = 'large', highlight = false }: Props) => {
  const getContainerStyle = (size: AvatarSize, highlight: boolean): string => {
    const baseStyle = 'rounded-full flex justify-center items-center ';
    const highlightStyle = highlight
      ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
      : '';
    const { container } = getImageSizeStyle(size);
    return `${baseStyle} ${highlightStyle} ${container}`;
  };

  const getImageSizeStyle = (size: AvatarSize): ImageSizeStyle => {
    switch (size) {
      case 'small':
        return {
          container: 'w-9 h-9',
          image: 'w-[34px] h-[34px] p-[0.05rem]',
        };
      case 'medium':
        return {
          container: 'w-11 h-11',
          image: 'w-[42px] h-[42px] p-[0.1rem]',
        };
      case 'large':
        return {
          container: 'w-[68px] h-[68px]',
          image: 'w-16 h-16 p-[0.1rem]',
        };
      case 'xlarge':
        return {
          container: 'w-[142px] h-[142px]',
          image: 'w-[138px] h-[138px] p-[0.3rem]',
        };
      default:
        throw new Error(`invalid size : ${size}`);
    }
  };

  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white object-cover rounded-full ${
          getImageSizeStyle(size).image
        }`}
        alt='user profile'
        src={image ?? undefined}
        referrerPolicy='no-referrer'
      />
    </div>
  );
};

export default Avatar;
