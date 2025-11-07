import { api } from "../../../lib/axios";

export type movieDTO = {
    title: string;
    year: number;
    image: string;
}


const _ENDPOINT = '/movies?key=37060da0';

export const movieService = {
    async list(): Promise<movieDTO[]>{
      const result = await api.get(_ENDPOINT)
      return result.data;
    }
}