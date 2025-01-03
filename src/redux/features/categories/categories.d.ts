export interface GetCagetories {
    count: number;
    results: CategoryResult[];
}

export interface CategoryResult {
    uuid: string;
    name: string;

}