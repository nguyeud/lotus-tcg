import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

import { InventoryCard } from './InventoryCard';
import { containerStyleSheet, responsiveStyle } from './styles';
import { GridItem } from './ui/grid';

interface InventoryGridItemProps {
  readonly parentComponentId: string;
  readonly pokemonTcgCard?: PokemonTCG.Card;
}

export const InventoryGridItem = ({ ...props }: InventoryGridItemProps) => {
  const componentId = 'inventory-grid-item';

  if (!props.pokemonTcgCard) {
    return null;
  }

  return (
    <GridItem
      id={`${props.parentComponentId}-${componentId}-${props.pokemonTcgCard.id}`}
      key={props.pokemonTcgCard.id}
      style={containerStyleSheet.noSpacingContainer}
      _extra={{
        className: responsiveStyle.gridItem,
      }}
    >
      <InventoryCard pokemonTcgCard={props.pokemonTcgCard} />
    </GridItem>
  );
};
