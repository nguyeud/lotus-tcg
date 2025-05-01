import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

import { InventoryCard } from './InventoryCard';
import { commonStyles } from './styles';
import { Grid, GridItem } from './ui/grid';

interface InventoryGridProps {
  readonly pokemonTcgCards: PokemonTCG.Card[];
}

export const InventoryGrid = ({ ...props }: InventoryGridProps) => {
  const responsiveContainerStyle = 'w-full sm:w-4/5 max-w-5xl';
  const gridStyle = 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  const gridItemStyle = 'col-span-1';

  return (
    <Grid
      id="inventory-grid"
      style={commonStyles.gridContainer}
      className={responsiveContainerStyle}
      _extra={{
        className: gridStyle,
      }}
    >
      {props.pokemonTcgCards.map((card) => {
        return (
          <GridItem
            id={`inventory-grid-item-${card.id}`}
            key={card.id}
            style={commonStyles.noSpacingContainer}
            _extra={{
              className: gridItemStyle,
            }}
          >
            <InventoryCard pokemonTcgCard={card} />
          </GridItem>
        );
      })}
    </Grid>
  );
};
