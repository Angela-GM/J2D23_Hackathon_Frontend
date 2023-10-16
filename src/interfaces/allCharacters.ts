export interface Info {
    // count: number;
    // pages: number;
    next: string | null;
    prev: string | null;
}

export interface Results {
    id: number;
    name: string;
    status: string;
    type: string;
    gender: string;
    
}

export interface AllCharacters {
    info: Info;
    results: Results[];

}