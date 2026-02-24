import { Link } from "react-router-dom";
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
                    <Link to={`/editarrawmaterial/${rawMaterial.id}`}
                        className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800
                                flex items-center justify-center py-2">
                        <button>Editar</button>
                    </Link>

                    <Link
                        to={`/deletarrawmaterial/${rawMaterial.id}`}
                        className="w-full text-slate-100 bg-red-400 hover:bg-red-700
                                flex items-center justify-center py-2">
                        <button>Deletar</button>
                    </Link>
                    
                </footer>
            </article>
        </>
    );
}
export default CardRawMaterials;