import { Image } from './ui/image';
import { Pressable } from './ui/pressable';

export const HeaderLogo = () => {
  const assetFile = '@/assets/images/lotus-tcg-logo.png';

  return (
    <Pressable id="header-logo-pressable">
      <Image
        id="header-logo-pressable-image"
        source={require(assetFile)}
        alt="Lotus TCG logo"
        className="h-8 w-12"
      />
    </Pressable>
  );
};
