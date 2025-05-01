import { Image } from './ui/image';
import { Pressable } from './ui/pressable';

export const HeaderLogo = () => {
  const imageFile = '@/assets/images/lotus-tcg-logo.png';
  const imagePosition = 'absolute -top-1 left-1/2';
  const imageSize = 'h-8 w-12';

  return (
    <Pressable id="header-logo-pressable" className={imagePosition}>
      <Image
        id="header-logo-pressable-image"
        source={require(imageFile)}
        alt="Lotus TCG logo"
        className={imageSize}
      />
    </Pressable>
  );
};
