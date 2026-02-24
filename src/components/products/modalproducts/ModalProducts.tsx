import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormProducts from "../formproducts/FormProducts";

function ModalProducts() {
    return (
        <Popup
            trigger={
                <button className="bg-indigo-900 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                    + Novo Produto
                </button>
            }
            modal
            contentStyle={{
                borderRadius: "1rem",
                paddingBottom: "2rem",
            }}
        >
            <FormProducts />
        </Popup>
    );
}

export default ModalProducts;