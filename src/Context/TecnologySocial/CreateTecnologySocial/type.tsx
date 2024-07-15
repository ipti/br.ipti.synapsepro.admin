export interface CreateTsTypes {
    CreateTechnology: (body: {
        name: string;
        uf: string
    }) => void;
}