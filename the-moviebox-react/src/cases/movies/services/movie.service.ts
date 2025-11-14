import { api } from "../../../lib/axios";

export type MovieDTO = {
    title: string;
    year: number;
    image: string;
    genres: string;
    duration: string;
    sinopse: string;
    highlight: string;
}

const _ENDPOINT = '/movies?key=37060da0';

export const MovieService = {
    async list(): Promise<MovieDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data;
    }
}