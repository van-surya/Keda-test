import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import { ModalProvider } from "../ModalContext";

function Layouts() {
    return (
        <>
            <ModalProvider>
                <Header />
                <Modal />
            </ModalProvider>
            <Outlet />
            <Footer />
        </>
    );
};

export default Layouts