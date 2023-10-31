export interface Info {
    pages: number;
    next: string | null;
    prev: string | null;
}

interface Origin {
    name: string,
    url: string
}
export interface Results {
    id: number;
    image: string;
    species: string;
    name: string;
    origin: Origin;
    type: string;
    gender: string;
    
}

export interface AllCharacters {
    info: Info;
    results: Results[];

}
interface Origin {
    name: string;
    url: string;
}
interface Location {
    name: string;
    url: string;
}
export interface DetailCharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
}