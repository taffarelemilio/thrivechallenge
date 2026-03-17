import { api } from "@/lib/api";
import type {
  ApiListResponse,
  Character,
  Location,
} from "@/types/rick-and-morty";

export const getCharacters = async (): Promise<Character[]> => {
  const { data } = await api.get<ApiListResponse<Character>>("/character");
  return data.results;
};

export const getLocations = async (): Promise<Location[]> => {
  const { data } = await api.get<ApiListResponse<Location>>("/location");
  return data.results;
};
