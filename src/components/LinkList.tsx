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
        <ul class="pl-0">
            <For each={links}>
                {(link) => (
                    <li class="flex list-none mt-1 pl-2">
                        <img 
                            src={`/link-favicons/${link.icon}`} 
                            alt=""
                            loading="lazy"
                            class="mr-1 p-1 h-6 w-6 border-2 border-[--color-comment] rounded-full"
                        />
                        <a 
                            class="flex flex-wrap align-items-center no-underline p-0 pl-1 hover:text-[--color-string] after:inline-block after:w-6 after:pl-1 border-b-2 border-transparent hover:border-b-2 hover:border-[var(--color-string)] hover:mr-0 hover:after:content-extLinkIcon ext"
                            href={link.url} 
                            target="_blank">
                            {link.title}
                            {link.src ? <span class="pl-1 text-[--color-text] !font-normal">({link.src})</span> : null}
                        </a>
                    </li>
                )}   
            </For>
        </ul>
    );
}
