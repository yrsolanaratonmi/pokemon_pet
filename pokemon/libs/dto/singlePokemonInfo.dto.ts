import { UnifiedResponse } from './unifiedResponse.dto';

export interface SinglePokemonInfo {
  abilities: Array<Ability>;
  base_experience: number | null;
  forms: Array<UnifiedResponse>;
  game_indicies: Array<GameIndicie>;
  height: number;
  held_items: Array<null | HeldItem>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Move>;
  name: string;
  order: number;
  past_types: Array<undefined | null>;
  species: UnifiedResponse;
  sprites: Sprites;
  stats: Array<Stat>;
  types: Array<{ slot: number; type: UnifiedResponse }>;
  weight: number;
}

interface Ability {
  ability: UnifiedResponse;
  is_hidden: boolean;
  slot: number;
}

interface GameIndicie {
  game_index: number;
  version: UnifiedResponse;
}

interface HeldItem {
  item: UnifiedResponse;
  version_details: Array<VersionDetail>;
}

interface VersionDetail {
  rarity: number;
  version: UnifiedResponse;
}

interface Move {
  move: UnifiedResponse;
  version_group_details: Array<VersionGroupDetail>;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: UnifiedResponse;
  version_group: UnifiedResponse;
}

interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: Other;
  versions: any;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

type DreamWorld = Pick<Sprites, 'front_default' & 'front_female'>;

type Home = Pick<Sprites, 'front_default' & 'front_female' & 'front_shiny' & 'front_shiny_female'>;

type OfficialArtwork = Pick<Sprites, 'front_default' & 'front_shiny'>;

interface Stat {
  base_stat: number;
  effort: number;
  stat: UnifiedResponse;
}
