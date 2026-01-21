import { useState } from "react";
import Modal from "./Modal";

export default function editCertificate() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Certificate">
            {/* Add your modal content here */}
            <div>
                Certificate form goes here.
            </div>
        </Modal>
    );
}