import { useState } from "react";

import type { Tab } from "@/types/rick-and-morty";
import { useLocations } from "@/hooks/useLocations";
import { useCharacters } from "@/hooks/useCharacters";
import { LocationCard } from "@/components/location-card/LocationCard";
import { CharacterCard } from "@/components/character-card/CharacterCard";
import {
  Grid,
  Page,
  StateMessage,
  TabButton,
  Tabs,
  Title,
} from "@/styles/home.styles";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("characters");
  const {
    data: characters,
    isLoading: isCharactersLoading,
    isError: isCharactersError,
  } = useCharacters({
    enabled: activeTab === "characters",
  });

  const {
    data: locations,
    isLoading: isLocationsLoading,
    isError: isLocationsError,
  } = useLocations({
    enabled: activeTab === "locations",
  });

  // console.log({ characters, locations });

  const showCharacters = () => {
    if (isCharactersLoading)
      return <StateMessage>Loading characters...</StateMessage>;
    if (isCharactersError) {
      return <StateMessage>Failed to load characters.</StateMessage>;
    }
    if (!characters?.length) {
      return <StateMessage>No characters found.</StateMessage>;
    }

    return (
      <Grid>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>
    );
  };

  const showLocations = () => {
    if (isLocationsLoading)
      return <StateMessage>Loading locations...</StateMessage>;
    if (isLocationsError) {
      return <StateMessage>Failed to load locations.</StateMessage>;
    }
    if (!locations?.length) {
      return <StateMessage>No locations found.</StateMessage>;
    }

    return (
      <Grid>
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </Grid>
    );
  };

  return (
    <Page>
      <Image src="thrive.svg" alt="Thrive Logo" width={100} height={50} />
      <Title>Rick & Morty Explorer</Title>

      <Tabs>
        <TabButton
          type="button"
          $active={activeTab === "characters"}
          onClick={() => setActiveTab("characters")}
        >
          Characters
        </TabButton>

        <TabButton
          type="button"
          $active={activeTab === "locations"}
          onClick={() => setActiveTab("locations")}
        >
          Locations
        </TabButton>
      </Tabs>

      {activeTab === "characters" ? showCharacters() : showLocations()}
    </Page>
  );
}
