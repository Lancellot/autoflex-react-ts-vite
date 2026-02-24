import type RawMaterial from "../../../models/RawMaterials";

interface CardRawMaterialsProps {
    rawMaterial: RawMaterial;
}

function CardRawMaterials({ rawMaterial }: CardRawMaterialsProps) {

    return (
        <>
            <article className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-blue-500 text-white font-bold text-2xl">{rawMaterial.name}</header>
                <p className="p-8 text-3xl bg-slate-200 flex-1">{rawMaterial.description}</p>
                <footer className="flex">

                </footer>
            </article>
        </>
    );
}
export default CardRawMaterials;