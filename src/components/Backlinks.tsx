// TODO: Graph layout // RADIAL 
//import "./Backlinks.css";
import { A } from 'solid-start';
import { For } from 'solid-js';

type BackLink = {
    title: string;
    url: string;
}

interface BacklinksProps {
    backlinks: BackLink[];
}

export function Backlinks(props: BacklinksProps) {
    const { backlinks } = props;
    return (
        <div class="backlinks center">
            <ul>
                <For each={backlinks}>
                    {(link) => (
                        <li>
                            <A href={`/${link.url}`}>
                                <span class="title">{link.title}</span>
                            </A>
                        </li>
                    )}   
                </For>
            </ul>
        </div>
    );
}