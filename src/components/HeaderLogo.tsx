import { Image } from './ui/image';
import { Pressable } from './ui/pressable';

export const HeaderLogo = () => {
  const componentId = 'header-logo';

  const imageName = 'Lotus TCG Logo';
  const imageFilePath = `@/assets/images/lotus-tcg-logo.png`;
  const imageSize = 'h-12 w-14';

  return (
    <Pressable id={`${componentId}-pressable`}>
      <Image
        id={`${componentId}-pressable-image`}
        source={require(imageFilePath)}
        className={imageSize}
        alt={imageName}
      />
    </Pressable>
  );
};
