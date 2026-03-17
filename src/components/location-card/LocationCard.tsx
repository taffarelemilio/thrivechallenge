import type { Location } from "@/types/rick-and-morty";
import { Card, CardBody, CardContent, CardTitle } from "./LocationCard.styles";

type LocationCardProps = {
  location: Location;
};

export const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{location.name}</CardTitle>
        <CardContent>Type: {location.type || "Unknown"}</CardContent>
      </CardBody>
    </Card>
  );
};
