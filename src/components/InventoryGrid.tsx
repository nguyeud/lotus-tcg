import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

import { InventoryGridItem } from './InventoryGridItem';
import { containerStyleSheet, responsiveStyle } from './styles';
import { Grid } from './ui/grid';

interface InventoryGridProps {
  readonly pokemonTcgCards: PokemonTCG.Card[];
}

export const InventoryGrid = ({ ...props }: InventoryGridProps) => {
  const componentId = 'inventory-grid';

  return (
    <Grid
      id={componentId}
      style={containerStyleSheet.gridContainer}
      className={responsiveStyle.layout}
      _extra={{
        className: responsiveStyle.grid,
      }}
    >
      {props.pokemonTcgCards.map((tcgCard) => {
        return (
          <InventoryGridItem
            parentComponentId={componentId}
            pokemonTcgCard={tcgCard}
          />
        );
      })}
    </Grid>
  );
};
