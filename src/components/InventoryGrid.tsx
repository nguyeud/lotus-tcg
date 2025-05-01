import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

import { InventoryCard } from './InventoryCard';
import { Grid, GridItem } from './ui/grid';

interface InventoryGridProps {
  readonly pokemonTcgCards: PokemonTCG.Card[];
}

export const InventoryGrid = ({ ...props }: InventoryGridProps) => {
  const responsiveContainerStyle = "w-full sm:w-4/5"
  
  return (
    <Grid
      // style={commonStyles.largeWidthContainer}
      className="gap-x-4 gap-y-6 p-6 sm:w-4/5"
      _extra={{
        className: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      }}
    >
      {props.pokemonTcgCards.map((card) => {
        return (
          <GridItem
            key={card.id}
            className="p-0"
            _extra={{
              className: 'col-span-1',
            }}
          >
            <InventoryCard pokemonTcgCard={card} />
          </GridItem>
        );
      })}
    </Grid>
  );
};
