export interface Info {
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