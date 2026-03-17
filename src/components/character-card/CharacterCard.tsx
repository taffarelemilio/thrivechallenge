import type { Character } from "@/types/rick-and-morty";
import {
  Card,
  CardBody,
  CardContent,
  CardTitle,
  ImageWrapper,
} from "./CharacterCard.styles";
import Image from "next/image";

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Card>
      <ImageWrapper>
        <Image
          src={character.image}
          alt={character.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>
      <CardBody>
        <CardTitle>{character.name}</CardTitle>
        <CardContent>Status: {character.status}</CardContent>
        <CardContent>Species: {character.species}</CardContent>
      </CardBody>
    </Card>
  );
};
