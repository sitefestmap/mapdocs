// TODO: Graph layout // RADIAL
import { A } from "solid-start";
import { For } from "solid-js";

type BackLink = {
    title: string;
    url: string;
};

interface BacklinksProps {
    backlinks: BackLink[];
}

export function Backlinks(props: BacklinksProps) {
    const { backlinks } = props;
    return (
        <div class="grid place-items-center">
            <ul class="flex max-w-2xl flex-wrap rounded-3xl bg-[var(--color-background)] px-4 py-2 list-disc">
                <For each={backlinks}>
                    {(link) => (
                        <li class="m-2 mr-10 p-0 first-of-type:ml-0 last-of-type:mr-0">
                            <A
                                href={`/${link.url}`}
                                class="no-underline hover:text-[var(--color-string)]"
                            >
                                <span class="">{link.title}</span>
                            </A>
                        </li>
                    )}
                </For>
            </ul>
        </div>
    );
}
