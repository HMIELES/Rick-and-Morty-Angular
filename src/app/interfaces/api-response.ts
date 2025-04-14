import { Character } from "./character";

export interface ApiResponse {
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    characters: Character[],
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
      };
    results: Character[];
}
