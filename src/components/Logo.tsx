import { A } from "@solidjs/router"

export default function Logo() {
    return (
        
        <A href="/" activeClass="" aria-label="Map Docs - Home" class="group hover:text-[var(--color-string-expression)] flex flex-row items-center ml-2">
            <svg aria-hidden="true" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" class="fill-[var(--color-text)] max-w-16 md:w-20 lg:w-24 group-hover:fill-[var(--color-string-expression)]">
                <circle cx="100" cy="15" r="10"></circle>
                <circle cx="60" cy="40" r="10"></circle>
                <circle cx="140" cy="40" r="10"></circle>
                <circle cx="25" cy="65" r="10"></circle>
                <circle cx="175" cy="65" r="10"></circle>
                <path d="M 91,21 L 70,35" stroke-width="3" stroke="var(--primary)"></path>
                <path d="M 109,21 L 130,35" stroke-width="3" stroke="var(--primary)"></path>
                <path d="M 51,47 L 34,59" stroke-width="3" stroke="var(--primary)"></path>
                <path d="M 149,47 L 166,59 " stroke-width="3" stroke="var(--primary)"></path>
            </svg>
            <span class="pl-2 text-l md:text-xl lg:text-2xl">Map Docs</span>
        </A>
       
    )
}

