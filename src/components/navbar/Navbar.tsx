import type { ReactNode } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    let componet: ReactNode;

    componet = (

        <nav className="w-full flex justify-center py-4
            bg-blue-500 text-white">
            <section className="container flex justify-between text-lg mx-8">
                <Link to="/home" className="text-2xl font-bold">Teste Prático - Autoflex</Link>

                <ul className="flex gap-4">

                    <li><Link to='/produtos' className='hover:underline'>Produtos</Link></li>

                    <li><Link to='/materia' className='hover:underline'>Matérias Primas</Link></li>

                </ul>
            </section>
        </nav>
    )

    return (

        <>
            {componet}
        </>

    );
}
export default Navbar;