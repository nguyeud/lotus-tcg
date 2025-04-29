import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { getPokemonTcgCardsById } from '@/api/pokemon-tcg/pokemon-tcg-cards';
import { Grid, GridItem } from '@/components/ui/grid';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Image } from '@/components/ui/image';
import { Center } from '@/components/ui/center';

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
            className: 'p-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
          }}
        >
          {data.map((card: PokemonTCG.Card) => {
            return (
              <GridItem
                key={card.id}
                _extra={{
                  className: 'col-span-1',
                }}
              >
                <Card className="rounded-lg w-full">
                  <Image
                    source={{
                      uri: card.images.large
                    }}
                    className="rounded-md h-full w-full aspect-[3/4]"
                    alt="image"
                  />
                  <VStack className="mb-4">
                    <Heading size="md" className="py-2">
                      {card.name}
                    </Heading>
                    <Text className="text-sm font-normal text-typography-700">
                      {card.set.series}
                    </Text>
                    <Text size="sm">
                      {card.set.name}
                    </Text>
                  </VStack>
                  <Box className="flex-col sm:flex-row">
                    <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
                      <ButtonText size="sm">Add</ButtonText>
                    </Button>
                    <Button
                      variant="outline"
                      className="px-4 py-2 border-outline-300 sm:flex-1"
                    >
                      <ButtonText size="sm" className="text-typography-600">
                        View
                      </ButtonText>
                    </Button>
                  </Box>
                </Card>
              </GridItem>
            );
          })}
        </Grid>
    </ScrollView>
  );
}
