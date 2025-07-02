import { useContext } from "react";
import { ModalContext } from "../ModalContext";

function Modal() {
    const { isModalOpen, toggleModal } = useContext(ModalContext);

    if (!isModalOpen) return null;
    return (
        <>
            <div className="fixed bg-[#0000007d] top-0 left-0 w-full h-full z-50 flex justify-center items-center">
                <div className="p-4 bg-neutral-300 w-[320px] md:w-[400px] flex flex-col rounded-lg">
                    <button onClick={toggleModal} className="ms-auto cursor-pointer">X</button>
                    <p className="text-neutral-800 text-center text-xl mb-4">LOGIN</p>
                    <div className="mb-3">
                        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5" placeholder="Your email" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5" placeholder="Password" />
                    </div>
                    <button className="cursor-pointer mt-4 border border-orange-400 flex justify-center items-center w-full py-2 rounded-lg text-orange-400 hover:bg-orange-400 hover:text-neutral-50 font-semibold">
                        Login
                    </button>
                </div>
            </div>
        </>
    );
}

export default Modal

