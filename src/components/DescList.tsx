import { For } from 'solid-js'
import './DescList.css'

type Desc = {
    term: string;
    def: string;
}

interface DescListProps {
    descs: Desc[];
}

export function DescList(props: DescListProps) {
    const { descs } = props;
    return(
        <div class="container">
            <article class="desc-list">
                <ul>
                    <For each={descs}>
                            {(desc) => (
                        <li>
                            <span class="dt">{desc.term}</span>
                            <span>: </span>
                            <span class="dd">{desc.def}</span>
                        </li>
                    )}
                    </For>
                </ul>
            </article>
        </div>
    )
}