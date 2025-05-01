import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

import { Card } from './ui/card';
import { Heading } from './ui/heading';
import { HStack } from './ui/hstack';
import { Image } from './ui/image';
import { Text } from './ui/text';
import { VStack } from './ui/vstack';
import { commonStyles } from './styles';

interface InventoryCardProps {
  readonly pokemonTcgCard: PokemonTCG.Card;
}

export const InventoryCard = ({ ...props }: InventoryCardProps) => {
  const imageStyle = 'aspect-square h-full w-full rounded-lg';
  const textSize = 'sm';
  const textWeight = 'font-light'

  return (
    <Card 
      id={`inventory-grid-item-${props.pokemonTcgCard.id}`}
      style={commonStyles.cardContainer}>
      <Image
        id={`inventory-grid-item-image-${props.pokemonTcgCard.id}`}
        className={imageStyle}
        source={{
          uri: props.pokemonTcgCard.images.large,
        }}
        alt={`${props.pokemonTcgCard.name}`}
      />
      <HStack
        id={`inventory-grid-item-info-${props.pokemonTcgCard.id}`}
        style={{
          ...commonStyles.spaceBetweenContent,
          ...commonStyles.noSpacingContainer,
        }}
        className='flex-col sm:flex-row'
      >
        <VStack>
          <Heading
            id={`inventory-grid-item-name-${props.pokemonTcgCard.id}`}
            size={textSize}
          >
            {props.pokemonTcgCard.name}
          </Heading>
          <Text
            id={`inventory-grid-item-set-name-${props.pokemonTcgCard.id}`}
            size={textSize}
            className={textWeight}
          >
            {props.pokemonTcgCard.set.name}
          </Text>
        </VStack>
        <Text id={`inventory-grid-item-price-${props.pokemonTcgCard.id}`} className={textWeight}>
          $999.99
        </Text>
      </HStack>
    </Card>
  );
};
