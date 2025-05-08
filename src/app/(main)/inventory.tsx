import 'react-native-reanimated';

import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import React, { useEffect, useState } from 'react';

import { getPokemonTcgCardsById } from '@/api/pokemon-tcg/pokemon-tcg-cards';
import { InventoryGrid } from '@/components/InventoryGrid';
import { appContainerStyle } from '@/components/styles';
import { ScrollView } from '@/components/ui/scroll-view';
import { Spinner } from '@/components/ui/spinner';

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
  console.log('====> Inventory');

  const [isLoading, setLoading] = useState(true);
  const [pokemonTcgCards, setPokemonTcgCards] = useState<PokemonTCG.Card[]>([]);

  useEffect(() => {
    getPokemonTcgCardsById(dummyCardIds)
      .then((response) => {
        setPokemonTcgCards(response);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        ...appContainerStyle.centerAlignItems,
        ...appContainerStyle.centerContent,
      }}
      style={appContainerStyle.fullWidthContainer}
      className="bg-transparent"
    >
      <InventoryGrid pokemonTcgCards={pokemonTcgCards} />
    </ScrollView>
  );
}
