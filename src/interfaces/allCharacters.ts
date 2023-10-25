export interface Info {
    next: string | null;
    prev: string | null;
}

export interface Results {
    id: number;
    image: string;
    species: string;
    name: string;
    status: string;
    type: string;
    gender: string;
    
}

export interface AllCharacters {
    info: Info;
    results: Results[];

}