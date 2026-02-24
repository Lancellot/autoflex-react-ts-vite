import type RawMaterial from "./RawMaterials";

export default interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    createdAt: string;
    rawMaterial?: RawMaterial;
}