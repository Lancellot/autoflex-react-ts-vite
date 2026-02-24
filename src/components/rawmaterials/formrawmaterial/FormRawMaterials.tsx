import { useNavigate, useParams } from "react-router-dom";
import type RawMaterial from "../../../models/RawMaterials";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { atualizar, buscar } from "../../../services/Service";
import { ToastAlert } from "../../../utils/ToastAlert";
import ClipLoader from "react-spinners/ClipLoader";

function FormRawMaterials() {

    const navigate = useNavigate();

    const [rawMaterial, setRawMaterial] = useState<RawMaterial>({} as RawMaterial);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarById(id: string) {
        try {
            await buscar(`/rawMaterials/${id}`, setRawMaterial, {});
        } catch (error: any) {
            console.error("Erro ao buscar matéria-prima por ID:", error);
            alert("Erro ao buscar matéria-prima: " + (error.response?.data?.message || error.message));
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarById(id);
        }
    }, [id]);

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setRawMaterial({
            ...rawMaterial,
            [e.target.name]: e.target.value
        });
    }

    function retorn() {
        navigate("/materia");
    }

    async function newRawMaterials(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/rawMaterials/${id}`, rawMaterial, setRawMaterial, {});
                ToastAlert("Matéria-prima atualizada com sucesso!", "sucesso");
            } else {
                await atualizar(`/rawMaterials`, rawMaterial, setRawMaterial, {});
                ToastAlert("Matéria-prima criada com sucesso!", "sucesso");
            }
            retorn();
        } catch (error: any) {
            console.error("Erro ao salvar matéria-prima:", error);
            if (error.response) {
                ToastAlert("Erro: " + (error.response.data.message || "Erro ao salvar matéria-prima"), "erro");
            } else {
                ToastAlert("Erro: " + error.message, "erro");
            }
        } finally {
            setIsLoading(false);
        }

        return (
            <>
                <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-8">
                    <div className="container max-w-2xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black shadow-lg">+</span>
                                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                                    {id !== undefined ? "Editar Matéria-prima" : "Cadastrar Matéria-prima"}
                                </h1>
                            </div>

                            <form
                                className="flex flex-col gap-6"
                                onSubmit={newRawMaterials}
                            >
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="nome"
                                        className="text-gray-700 font-semibold text-sm"
                                    >
                                        Nome da Matéria-prima
                                    </label>
                                    <input
                                        type="text"
                                        name="nome"
                                        id="nome"
                                        value={rawMaterial.name}
                                        onChange={updateState}
                                        placeholder="Digite o nome da matéria-prima"
                                        className="border-2 border-gray-200 rounded-lg p-3 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="descricao"
                                        className="text-gray-700 font-semibold text-sm"
                                    >
                                        Descrição da Matéria-prima
                                    </label>
                                    <input
                                        type="text"
                                        name="descricao"
                                        id="descricao"
                                        value={rawMaterial.description}
                                        onChange={updateState}
                                        placeholder="Digite a descrição da matéria-prima"
                                        className="border-2 border-gray-200 rounded-lg p-3 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                                        required
                                    />
                                </div>

                                <div className="flex gap-4 mt-4">
                                    <button
                                        type="button"
                                        onClick={retorn}
                                        className="flex-1 border-2 border-gray-300 text-gray-700 rounded-lg py-3 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="flex-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-lg py-3 font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <ClipLoader size={24} color="#ffffff" />
                                        ) : (
                                            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default FormRawMaterials;