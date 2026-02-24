import { Link } from "react-router-dom";
import type Products from "../../../models/Procucts";

interface CardProductsProps {
    products: Products;
}

function CardProducts({ products }: CardProductsProps) {
    return (
        <> 
            <article className="border border-slate-900 flex flex-col rounded overflow-hidden justify-between">
            

            <section className="p-4">
                <h4 className="text-lg font-semibold uppercase">
                    {products.name}
                </h4>

                <p>
                    {products.description}
                </p>

                <p>
                    Matéria-prima: {products.rawMaterial?.name}
                </p>

                <p>Data: {new Intl.DateTimeFormat("pt-BR", {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(products.createdAt))}
                </p>
            </section>

            <footer className="flex">
                <Link
                    to={`/editarproduto/${products.id}`}
                    className="w-full text-white bg-indigo-400 hover:bg-indigo-800 
                            flex items-center justify-center py-2"
                >
                    Editar
                </Link>

                <Link
                    to={`/deletarproduto/${products.id}`}
                    className="w-full text-white bg-red-400 hover:bg-red-700 
                            flex items-center justify-center py-2"
                >
                    Deletar
                </Link>
            </footer>

        </article>
        </>
    );
}
export default CardProducts;