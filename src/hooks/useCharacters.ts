import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "@/services/rick-and-morty";

type UseCharactersOptions = {
  enabled?: boolean;
};

export const useCharacters = ({ enabled = true }: UseCharactersOptions = {}) =>
  useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
    enabled,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
