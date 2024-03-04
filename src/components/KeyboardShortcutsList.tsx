import { For } from "solid-js";
import './KeyboardShortcutsList.css';

type KeyboardShortcut = {
  key: string[]; 
  desc: string;
};

interface KeyboardShortcutsProps {
  keys: KeyboardShortcut[];
}

export function KeyboardShortcutsList(props: KeyboardShortcutsProps) {
    const { keys } = props;
    return (
        <div class="kbdlist">
            <h2>Keyboard Shortcuts</h2>
            <dl>
                <For each={keys}>
                    {(item) => (
                        <div class='dl'>
                            <dt>
                                <For each={item.key}>
                                    {(k) => (
                                        <kbd>{k}</kbd>
                                    )}
                                </For>
                            </dt>
                            <dd>{item.desc}</dd>
                        </div>
                    )}
                </For>
            </dl>
        </div>
    );
}
