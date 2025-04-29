import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

/**
 * Get all {@link PokemonTCG.Card}.
 * @returns List of Pokemon TCG cards
 */
export async function getAllPokemonTcgCards(): Promise<PokemonTCG.Card[]> {
  return await PokemonTCG.getAllCards();
}

/**
 * Get a {@link PokemonTCG.Card} by id.
 * @param id Id of card
 * @returns Pokemon TCG card
 */
export async function getPokemonTcgCardById(id: string): Promise<PokemonTCG.Card | null> {
  return await PokemonTCG.findCardByID(id)
  .then(response => {
    return response;
  })
  .catch(error => {
    console.warn(error);
    return null;
  });
}

/**
 * Get a list of {@link PokemonTCG.Card} by ids.
 * @param ids List of card ids
 * @returns List of Pokemon TCG cards
 */
export async function getPokemonTcgCardsById(ids: string[]): Promise<PokemonTCG.Card[]> {
  const cards: PokemonTCG.Card[] = [];

  for (const id of ids) {
    const card = await getPokemonTcgCardById(id);
    if (card) {
      cards.push(card);
    }
  }

  return await Promise.all(cards);
}

/**
 * Get a list of {@link PokemonTCG.Card} by query parameters.
 * @param params Query parameters
 * @returns List of Pokemon TCG cards
 */
export async function getPokemonTcgCardsByQuery(params: PokemonTCG.Parameter): Promise<PokemonTCG.Card[] | null> {
  return await PokemonTCG.findCardsByQueries(params)
  .then(response => {
    console.log(response);
    return response;
  })
  .catch(error => {
    console.warn(error);
    return null;
  });
}
