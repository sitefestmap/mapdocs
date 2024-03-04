//import './LinkList.css';
import { For } from 'solid-js';

type Link = {
    title: string;
    url: string;
    icon: string;
    src?: string;
}

interface LinkListProps {
    links: Link[];
}

// Provide an array of link objects to the links prop when using this component.
export function LinkList(props: LinkListProps) {
    const { links } = props;
    return (
        <div class="link-list">
            <ul>
                <For each={links}>
                    {(link) => (
                        <li>
                            <img 
                                src={`/link-favicons/${link.icon}`} 
                                alt=""
                                loading="lazy"
                            />
                            <a 
                                class="title"
                                href={link.url} 
                                target="_blank">
                                {link.title}
                                {link.src ? <span>({link.src})</span> : null}
                            </a>
                        </li>
                    )}   
                </For>
            </ul>
        </div>
    );
}
