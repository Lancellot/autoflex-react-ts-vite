import { useEffect, useState } from "react";
import type RawMaterial from "../../../models/RawMaterials";
import SyncLoader from "react-spinners/SyncLoader";
import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import CardRawMaterials from "../cardrawmaterial/CardRawMaterials";

function ListRawMaterials() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [rawMaterials, setRawMaterials] = useState<RawMaterial[]>([]);

    useEffect(() => {
        buscarRawMaterial();
    }, []); 

    async function buscarRawMaterial() {
        try {
            setIsLoading(true);
            await buscar("/raw-materials", setRawMaterials, {});
        } catch (error: any) {
            console.error("Erro ao buscar matérias-primas:", error);
            if (error.response) {
                alert("Ocorreu um erro ao buscar as matérias-primas. Por favor, tente novamente.");
            } else {
                alert("Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.");
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader color="#312e81" size={32} />
                </div>
            )}
            <main className="flex justify-center w-full my-4">
                <section className="container flex flex-col">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => navigate("/rawmaterials/cadastrar")} 
                            className="bg-indigo-900 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                        >
                            + Nova Matéria-Prima
                        </button>
                    </div>
                    {(!isLoading && rawMaterials.length === 0) && (
                        <span className="text-3xl text-center my-8">
                            Nenhuma matéria-prima encontrada
                        </span>
                    )}
                    <ul>
                        <li className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {rawMaterials.map((rawMaterial) => (
                                <CardRawMaterials key={rawMaterial.id} rawMaterial={rawMaterial} />
                            ))}
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}

export default ListRawMaterials;