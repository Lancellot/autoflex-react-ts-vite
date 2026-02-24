import { useNavigate, useParams } from "react-router-dom";
import type Products from "../../../models/Procucts";
import type RawMaterial from "../../../models/RawMaterials";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastAlert } from "../../../utils/ToastAlert";

function FormProducts() {
    const navigate = useNavigate();
    const [product, setProduct] = useState<Products>({} as Products);
    const [rawMaterials, setRawMaterials] = useState<RawMaterial[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarById(id: string) {
        try {
            await buscar(`/products/${id}`, setProduct, {});
        } catch (error: any) {
            ToastAlert("Erro ao buscar produto", "erro");
        }
    }

    async function buscarRawMaterials() {
        try {
            await buscar("/raw-materials", setRawMaterials, {});
        } catch (error: any) {
            ToastAlert("Erro ao carregar matérias-primas", "erro");
        }
    }

    useEffect(() => {
        buscarRawMaterials();
        if (id !== undefined) {
            buscarById(id);
        }
    }, [id]);

    function updateState(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/products");
    }

    async function submitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const payload = {
            name: product.name,
            description: product.description,
            price: Number(product.price),
            rawMaterial: product.RawMaterial ? { id: product.RawMaterial.id } : undefined
        };

        try {
            if (id !== undefined) {
                await atualizar(`/products/${id}`, payload, setProduct, {});
                ToastAlert("Produto atualizado com sucesso!", "sucesso");
            } else {
                await cadastrar(`/products`, payload, () => {}, {});
                ToastAlert("Produto criado com sucesso!", "sucesso");
            }
            retornar();
        } catch (error: any) {
            console.error("Erro completo:", error.response?.data || error.message);
            ToastAlert("Erro ao salvar produto", "erro");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-8">
            <div className="container max-w-2xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black shadow-lg">+</span>
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                            {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
                        </h1>
                    </div>

                    <form className="flex flex-col gap-6" onSubmit={submitForm}>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-gray-700 font-semibold text-sm">
                                Nome do Produto
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={product.name || ""}
                                onChange={updateState}
                                placeholder="Digite o nome do produto"
                                className="border-2 border-gray-200 rounded-lg p-3 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="description" className="text-gray-700 font-semibold text-sm">
                                Descrição do Produto
                            </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={product.description || ""}
                                onChange={updateState}
                                placeholder="Digite a descrição do produto"
                                className="border-2 border-gray-200 rounded-lg p-3 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="price" className="text-gray-700 font-semibold text-sm">
                                Preço
                            </label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={product.price || ""}
                                onChange={updateState}
                                placeholder="Digite o preço do produto"
                                min="0"
                                step="0.01"
                                className="border-2 border-gray-200 rounded-lg p-3 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="RawMaterial" className="text-gray-700 font-semibold text-sm">
                                Matéria-prima
                            </label>
                            <select
                                name="RawMaterial"
                                id="RawMaterial"
                                className="border-2 border-gray-200 rounded-lg p-3 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                                onChange={(e) =>
                                    setProduct({
                                        ...product,
                                        RawMaterial: rawMaterials.find(
                                            (rm) => rm.id === Number(e.target.value)
                                        )
                                    })
                                }
                                value={product.RawMaterial?.id || ""}
                                required
                            >
                                <option value="">Selecione uma matéria-prima</option>
                                {rawMaterials.map((rm) => (
                                    <option key={rm.id} value={rm.id}>
                                        {rm.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <button
                                type="button"
                                onClick={retornar}
                                className="flex-1 border-2 border-gray-300 text-gray-700 rounded-lg py-3 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg py-3 font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
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
    );
}

export default FormProducts;