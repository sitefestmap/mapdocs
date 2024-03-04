import { createSignal } from 'solid-js';
//import './Modal.css';

export let content: string;

export function Modal() {
    const [isModalOpen, setModalOpen] = createSignal(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div class="modal-container">
            <div class="help">
                <button id="openModalBtn" onClick={openModal}>Open</button>
                <div id="helpModal" class="modal" style={{ display: isModalOpen() ? 'block' : 'none' }}>
                    <div class="modal-content">
                        <span class="close" onClick={closeModal}>&times;</span>
                        <p>{content || 'Modal Content...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
