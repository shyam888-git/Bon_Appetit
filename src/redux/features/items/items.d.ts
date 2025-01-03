export interface Items {
    count: number;
    results: ItemsResult[];
}

export interface ItemsResult {
    uuid: string;
    name: string;
    slug: string;
    image: string;
    description: string;
    price: string;
    category: {
        uuid: string;
        name: string
    }

}