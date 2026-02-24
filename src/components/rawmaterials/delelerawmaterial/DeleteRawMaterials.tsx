import { useNavigate, useParams } from "react-router-dom";
import type RawMaterial from "../../../models/RawMaterials";
import { useEffect, useState } from "react";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlert } from "../../../utils/ToastAlert";

function DeleteRawMaterials() {
    const navigate = useNavigate();
    const [rawMaterial, setRawMaterial] = useState<RawMaterial>({} as RawMaterial);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarById(id: string) {
        try {
            await buscar(`/raw-materials/${id}`, setRawMaterial, {});
        } catch (error: any) {
            ToastAlert("Erro ao buscar matéria-prima", "erro");
            retornar();
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarById(id);
        }
    }, [id]);

    function retornar() {
        navigate("/materia");
    }

    async function deletarRawMaterial() {
        setIsLoading(true);
        try {
            await deletar(`/raw-materials/${id}`, {});
            ToastAlert("Matéria-prima deletada com sucesso!", "sucesso");
            retornar();
        } catch (error: any) {
            if (error.response) {
                ToastAlert(`Erro ao deletar: ${error.response.status} - ${error.response.data.message || "Erro desconhecido"}`, "erro");
            } else {
                ToastAlert("Erro ao deletar: " + error.message, "erro");
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-8">
            <section className="container max-w-2xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-6 text-center">
                        <h1 className="text-3xl font-bold mb-2">Deletar Matéria-prima</h1>
                        <p className="text-red-100 text-lg">Esta ação não pode ser desfeita</p>
                    </div>

                    <div className="p-8">
                        <p className="text-center text-gray-700 font-semibold mb-6 text-lg">
                            Tem certeza que deseja deletar esta matéria-prima?
                        </p>

                        <article className="border-2 border-gray-200 rounded-2xl overflow-hidden mb-6">
                            <header className="py-4 px-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
                                <h3 className="font-bold text-xl">{rawMaterial.name}</h3>
                            </header>
                            <div className="p-6 bg-gray-50 min-h-[100px]">
                                <p className="text-gray-700 leading-relaxed">{rawMaterial.description}</p>
                            </div>
                        </article>

                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
                            <p className="font-semibold text-red-800 mb-1">Atenção!</p>
                            <p className="text-red-700 text-sm">
                                Ao deletar esta matéria-prima, todos os produtos associados podem ser afetados.
                            </p>
                        </div>

                        <footer className="flex gap-4">
                            <button
                                className="flex-1 border-2 border-gray-300 text-gray-700 rounded-lg py-3 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50"
                                onClick={retornar}
                                disabled={isLoading}
                            >
                                Cancelar
                            </button>
                            <button
                                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg py-3 font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={deletarRawMaterial}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <ClipLoader size={24} color="#ffffff" />
                                ) : (
                                    <span>Confirmar Exclusão</span>
                                )}
                            </button>
                        </footer>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DeleteRawMaterials;