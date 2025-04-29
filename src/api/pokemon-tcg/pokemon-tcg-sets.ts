import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

/**
 * Get all {@link PokemonTCG.Set}.
 * @returns List of Pokemon TCG sets
 */
export async function getAllPokemonTcgSets(): Promise<PokemonTCG.Set[]> {
  return await PokemonTCG.getAllSets();
}

/**
 * Get a {@link PokemonTCG.Set} by id.
 * @param id Id of set
 * @returns Pokemon TCG set
 */
export async function getPokemonTcgSetById(id: string): Promise<PokemonTCG.Set | null> {
  return await PokemonTCG.findSetByID(id)
  .then(response => {
    return response;
  })
  .catch(error => {
    console.warn(error);
    return null;
  });
}

/**
 * Get a list of {@link PokemonTCG.Set} by ids.
 * @param ids List of set ids
 * @returns List of Pokemon TCG sets
 */
export async function getPokemonTcgSetsById(ids: string[]): Promise<PokemonTCG.Set[]> {
  const sets: PokemonTCG.Set[] = [];

  for (const id of ids) {
    const set = await getPokemonTcgSetById(id);
    if (set) {
      sets.push(set);
    }
  }

  return await Promise.all(sets);
}

/**
 * Get a list of {@link PokemonTCG.Set} by query parameters.
 * @param params Query parameters
 * @returns List of Pokemon TCG sets
 */
export async function getPokemonTcgSetsByQuery(params: PokemonTCG.Parameter): Promise<PokemonTCG.Set[] | null> {
  return await PokemonTCG.findSetsByQueries(params)
  .then(response => {
    console.log(response);
    return response;
  })
  .catch(error => {
    console.warn(error);
    return null;
  });
}
