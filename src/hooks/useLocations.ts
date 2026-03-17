import { useQuery } from "@tanstack/react-query";
import { getLocations } from "@/services/rick-and-morty";

type UseLocationsOptions = {
  enabled?: boolean;
};

export const useLocations = ({ enabled = true }: UseLocationsOptions = {}) =>
  useQuery({
    queryKey: ["locations"],
    queryFn: getLocations,
    enabled,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
