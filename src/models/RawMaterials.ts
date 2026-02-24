import type Products from "./Procucts";

export default interface RawMaterial {
    id: number;
    name: string;
    description: string;
    Products?: Products[];
}