import { createSignal } from 'solid-js';

export let content: string;

export function Modal() {
    const [isModalOpen, setModalOpen] = createSignal(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div class="mb-16">
            <div class="absolute">
                <button 
                    id="openModalBtn"
                    onClick={openModal}
                    class="m-2 p-1 rounded bg-[--color-text] text-[--color-background]"
                >
                    Open
                </button>
                <div 
                    id="helpModal" 
                    class="hidden fixed" 
                    style={{ display: isModalOpen() ? 'block' : 'none' }}
                >
                    <div class="my-[15%] mx-auto p-4 max-w-[--modal-width] z-90 left-0 top-0 w-full h-full rounded overflow-auto bg-[--color-function] text-[--color-body_background]">
                        <span 
                            class="float-right text-lg font-bold" 
                            onClick={closeModal}>&times;
                        </span>
                        <p>{content || 'Modal Content...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
