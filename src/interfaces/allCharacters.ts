interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: string;
}

interface Results {
    id: number;
    name: string;
    status: string;
    type: string;
    gender: string;
    
}

export interface AllCharacters {
    info: Info[];
    results: Results[];

}