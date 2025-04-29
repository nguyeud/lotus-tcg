import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { getPokemonTcgCardsById } from '@/api/pokemon-tcg/pokemon-tcg-cards';
import { Grid, GridItem } from '@/components/ui/grid';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';

// TODO: After Firebase implementation, remove constant
const dummyCardIds: string[] = [
  'g1-RC5',
  'g1-RC6',
  'g1-RC10',
  'g1-RC21',
  'g1-RC28',
  'g1-RC30',
  'g1-RC31',
  'g1-RC32',
  'xy10-55',
  'xy10-69',
  'xy10-85',
  'xy10-105a',
  'xy10-119',
  'xy10-121',
  'xy10-123',
  'xy11-79',
  'xy11-112',
  'sm9-165',
  'sm9-170',
  'sm10-195a',
  'sm10-199',
  'sm10-201',
  'sm10-205',
  'sm10-209',
  'sm12-38',
  'sm12-75',
  'sm12-143a',
  'sm12-157',
  'sm12-215',
  'sm12-216',
  'sm12-222',
  'sm12-226',
  'sm12-230',
  'sm12-232',
  'sm12-239',
  'sm12-241',
];

export default function Inventory() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<PokemonTCG.Card[]>([]);

  useEffect(() => {
    getPokemonTcgCardsById(dummyCardIds)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <Grid
        _extra={{
          className: '',
        }}
      >
        {data.map((card: PokemonTCG.Card) => {
          return (
            <GridItem
              _extra={{
                className: '',
              }}
            >
              <Text>{card.name}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </ScrollView>
  );
}
