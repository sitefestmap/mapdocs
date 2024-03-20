import { For, createEffect, createSignal } from 'solid-js';
import { A } from 'solid-start';
import './Menu.css'

type MenuItem = {
    title: string;
    url: string;
}

interface MenuItemsProps {
    menuitems: MenuItem[];
}

export let menuitems : Object;

export default function Menu(props: MenuItemsProps) {
    const { menuitems } = props;
    const [filterText, setFilterText] = createSignal('');
    const filteredItems = () =>
        menuitems.filter((item) =>
            item.title.toLowerCase().includes(filterText().toLowerCase())
        );
    const [isOpen, setIsOpen] = createSignal(false);

    createEffect(() => {
        const checkbox = document.getElementById('toggle') as HTMLInputElement;
        if (checkbox) {
            checkbox.addEventListener('change', () => {
                setIsOpen(checkbox.checked);
            });
        }
    });
    function handleClick() {
        //closeMobileMenu();
        setIsOpen(false);
    }

    return (
        <div 
            class="lg:absolute lg:max-h-screen p-1 rounded lg:rounded-none overflow-y-auto bg-[var(--color-background)] border-r-2 border-[var(--color-greydivider)]" 
            aria-labelledby="nav-label"
        >
            <input 
                checked={isOpen()} 
                onChange={() => setIsOpen(!isOpen())} 
                class="sr-only lg:hidden" 
                type="checkbox" 
                role="button" 
                aria-haspopup="true" 
                id="toggle" 
            />
            <label 
                for="toggle" 
                data-opens-menu
                class="lg:hidden flex items-center place-content-center m-0"
            >
                <svg 
                    class="icon w-3 h-3 stroke-[var(--color-text)] stroke-width-2 fill-none" 
                    viewBox="0 0 32 32">
                    <path d="M3,3 29,3 M3,16 29,16 M3,29 29,29"></path>
                </svg>
                    <span class="p-1 mt-1">Menu</span>
                <span class="sr-only expanded-text">expanded</span>
                <span class="sr-only collapsed-text">collapsed</span>
            </label>
            <nav 
                role="menu" 
                data-menu-origin="left" 
                class="grid pt-4 px-0 justify-items-center left-0 lg:p-0 lg:justify-items-left lg:!grid"
                style={{ display: isOpen() ? 'block' : 'none'}}
            >
                <div class="mt-0 p-0 h-full">
                    <input
                        class="relative p-2 m-1 max-w-44 bg-[var(--color-background)] text-[var(--color-text)] border-[var(--color-text)] border-2 rounded"
                        type="text"
                        value={filterText()}
                        onInput={(e) => {
                            setFilterText(e.target.value);
                        }}
                        placeholder="Filter"
                    />
                    <ul>
                        <For each={filteredItems()}>
                            {(menuitem) => (
                                <div 
                                    class="relative m-1 p-2 border-[var(--color-greydivider)] border-2" 
                                    onClick={handleClick}
                                >
                                    <A href={`/${menuitem.url}`} class="inline-block mt-1 text-align-left max-w-32">
                                        <span class="title">{menuitem.title}</span>
                                    </A>
                                </div>
                            )}
                        </For>
                    </ul>
                </div>
            </nav>
        </div>
    );
}