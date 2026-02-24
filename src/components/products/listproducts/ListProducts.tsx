import { useEffect, useState } from "react";
import type Products from "../../../models/Procucts";
import type RawMaterial from "../../../models/RawMaterials";
import SyncLoader from "react-spinners/SyncLoader";
import { buscar } from "../../../services/Service";
import CardProducts from "../cardproducts/CardProducts";
import ModalProducts from "../modalproducts/ModalProducts";

function ListProducts() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Products[]>([]);
    const [rawMaterials, setRawMaterials] = useState<RawMaterial[]>([]);
    const [rawMaterialId, setRawMaterialId] = useState<number>(0);

    useEffect(() => {
        buscarRawMaterials();
    }, []);

    useEffect(() => {
        if (rawMaterialId !== 0) {
            buscarPorRawMaterial();
        } else {
            buscarProducts();
        }
    }, [rawMaterialId]);

    async function buscarProducts() {
        try {
            setIsLoading(true);
            await buscar("/products", setProducts, {});
        } catch (error: any) {
            console.error("Erro ao buscar produtos:", error);
            if (error.response) {
                alert("Ocorreu um erro ao buscar os produtos. Por favor, tente novamente.");
            } else {
                alert("Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.");
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function buscarRawMaterials() {
        try {
            await buscar("/raw-materials", setRawMaterials, {});
        } catch (error: any) {
            console.error("Erro ao buscar matérias-primas:", error);
        }
    }

    async function buscarPorRawMaterial() {
        try {
            setIsLoading(true);
            await buscar(`/products/raw-material/${rawMaterialId}`, setProducts, {});
        } catch (error: any) {
            console.error("Erro ao buscar por matéria-prima:", error);
            alert("Erro ao filtrar produtos por matéria-prima.");
        } finally {
            setIsLoading(false);
        }
    }

    function limparFiltro() {
        setRawMaterialId(0);
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
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <select
                                className="border-2 border-gray-200 rounded-lg p-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                                value={rawMaterialId}
                                onChange={(e) => setRawMaterialId(Number(e.target.value))}
                            >
                                <option value={0}>Filtrar por matéria-prima</option>
                                {rawMaterials.map((rm) => (
                                    <option key={rm.id} value={rm.id}>
                                        {rm.name}
                                    </option>
                                ))}
                            </select>
                            {rawMaterialId !== 0 && (
                                <button
                                    onClick={limparFiltro}
                                    className="border-2 border-gray-300 text-gray-700 rounded-lg px-4 py-2 font-semibold hover:bg-gray-50 transition-all duration-200"
                                >
                                    Limpar filtro
                                </button>
                            )}
                        </div>
                        <ModalProducts />
                    </div>

                    {(!isLoading && products.length === 0) && (
                        <span className="text-3xl text-center my-8">
                            Nenhum produto encontrado
                        </span>
                    )}

                    <ul>
                        <li className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <CardProducts key={product.id} products={product} />
                            ))}
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}

export default ListProducts;