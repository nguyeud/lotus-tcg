import { Image } from './ui/image';
import { Pressable } from './ui/pressable';

export const HeaderLogo = () => {
  const imageFile = '@/assets/images/lotus-tcg-logo.png';
  const imageSize = 'h-12 w-14';

  return (
    <Pressable id="header-logo-pressable">
      <Image
        id="header-logo-pressable-image"
        source={require(imageFile)}
        alt="Lotus TCG logo"
        className={imageSize}
      />
    </Pressable>
  );
};
