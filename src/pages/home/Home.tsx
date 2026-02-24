import ListProducts from "../../components/products/listproducts/ListProducts";
import ModalProducts from "../../components/products/modalproducts/ModalProducts";

function Home() {
    return (
        <>
            <main className="bg-blue-500 flex justify-center">
                <section className="container grid grid-cols-2 text-white">
                    <article className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
                        <p className="text-xl">Gerencie seus produtos e matérias-primas.</p>
                        <ModalProducts />
                    </article>
                    <figure className="flex justify-center">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Inicial"
                            className="w-2/3"
                        />
                    </figure>
                </section>
            </main>
            <ListProducts />
        </>
    );
}

export default Home;