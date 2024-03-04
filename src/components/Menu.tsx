import { For, createEffect, createSignal } from 'solid-js';
import { A } from 'solid-start';
//import "./Menu.css";

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
        <div data-menu-component class="nav" aria-labelledby="nav-label" >
            <input checked={isOpen()} onChange={() => setIsOpen(!isOpen())} class="nav-toggle vh" type="checkbox" role="button" aria-haspopup="true" id="toggle" />
            <label for="toggle" data-opens-menu>
                <svg class="icon" viewBox="0 0 32 32">
                    <path d="M3,3 29,3 M3,16 29,16 M3,29 29,29"></path>
                </svg>
                Menu
                <span class="vh expanded-text">expanded</span>
                <span class=" vh collapsed-text">collapsed</span>
            </label>
            <nav role="menu" data-menu-origin="left" class="menu-nav" style={{ display: isOpen() ? 'block' : 'none'}}>
                <div class='menu-container'>
                    <input
                        class="card"
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
                                <div class="card" onClick={handleClick}>
                                    <A href={`/${menuitem.url}`}>
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