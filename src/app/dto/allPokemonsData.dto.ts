import { UnifiedResponse } from './unifiedResponse.dto';

export interface AllPokemonsData {
  count: number;
  next: null;
  previous: null;
  results: Array<UnifiedResponse>;
}
