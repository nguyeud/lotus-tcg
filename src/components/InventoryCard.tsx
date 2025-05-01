import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

import { Card } from './ui/card';
import { Heading } from './ui/heading';
import { HStack } from './ui/hstack';
import { Image } from './ui/image';
import { Text } from './ui/text';
import { VStack } from './ui/vstack';

interface InventoryCardProps {
  readonly pokemonTcgCard: PokemonTCG.Card;
}

export const InventoryCard = ({ ...props }: InventoryCardProps) => {
  return (
    <Card className="gap-2 rounded-lg bg-transparent p-0">
      {/** ONE */}
      <Image
        source={{
          uri: props.pokemonTcgCard.images.large,
        }}
        className="aspect-[3/3] h-auto w-full rounded-lg"
        alt="image"
      />
      {/** TWO */}
      <HStack className="flex-col justify-between gap-2 sm:flex-row">
        <VStack>
          <Text size="sm" className="font-light">
            {props.pokemonTcgCard.set.name}
          </Text>
          <Heading size="sm" className="size-sm font-normal">
            {props.pokemonTcgCard.name}
          </Heading>
        </VStack>
        <Text size="md" className="font-light">
          $999.99
        </Text>
      </HStack>
    </Card>
  );
};
