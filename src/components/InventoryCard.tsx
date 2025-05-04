import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

import {
  StyledHeader,
  StyledSubheader,
  StyledText,
} from './custom_ui/CustomText';
import { appContainerStyle, appResponsiveStyle } from './styles';
import { Card } from './ui/card';
import { HStack } from './ui/hstack';
import { Image } from './ui/image';
import { VStack } from './ui/vstack';

interface InventoryCardProps {
  readonly pokemonTcgCard: PokemonTCG.Card;
}

export const InventoryCard = ({ ...props }: InventoryCardProps) => {
  const componentId = 'inventory-card';

  return (
    <Card
      id={`${componentId}-${props.pokemonTcgCard.id}`}
      style={appContainerStyle.cardContainer}
    >
      <Image
        id={`${componentId}-${props.pokemonTcgCard.id}-image`}
        className={appResponsiveStyle.imageSquare}
        source={{
          uri: props.pokemonTcgCard.images.large,
        }}
        alt={`${props.pokemonTcgCard.name}`}
      />
      <HStack
        id={`${componentId}-${props.pokemonTcgCard.id}-info`}
        style={{
          ...appContainerStyle.spaceBetweenContent,
          ...appContainerStyle.noSpacingContainer,
        }}
        className={appResponsiveStyle.hStack}
      >
        <VStack>
          {StyledHeader.getElement({
            componentId: `${componentId}-${props.pokemonTcgCard.id}-name`,
            text: props.pokemonTcgCard.name,
          })}
          {StyledSubheader.getElement({
            componentId: `${componentId}-${props.pokemonTcgCard.id}-set-name`,
            text: props.pokemonTcgCard.set.name,
          })}
        </VStack>
        {StyledText.getElement({
          componentId: `${componentId}-${props.pokemonTcgCard.id}-price`,
          text: '$999.99',
        })}
      </HStack>
    </Card>
  );
};
