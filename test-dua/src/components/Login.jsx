import { useContext } from "react"
import { ModalContext } from "../ModalContext";

function Login() {
    const { toggleModal } = useContext(ModalContext);
    return (
        <>
            <button onClick={toggleModal} className="border border-blue-700 text-blue-700 rounded-lg px-3 py-1 order-2 ms-auto mr-2 lg:ms-8 cursor-pointer">
                Login
            </button>
        </>
    );
}

export default Login