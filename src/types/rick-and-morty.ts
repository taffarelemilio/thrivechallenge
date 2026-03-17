export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
};

export type ApiListResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
};

export type Tab = "characters" | "locations";
