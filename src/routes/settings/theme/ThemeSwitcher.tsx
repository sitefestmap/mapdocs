import { createEffect } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import './theme-switcher.css'

function BackButton() {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1) }  
    return (<button onClick={goBack} class="back-button p-2 rounded">&times;</button>)
};

export function ThemeSwitcher() {
    const defaultTheme: string = 'moon';
    const applyTheme = (theme: string) => {
        const target: HTMLElement | null = document.querySelector(`[data-theme="${theme}"]`);
        document.documentElement.setAttribute("data-selected-theme", theme);
        const pressedButton: HTMLElement | null = document.querySelector('[data-theme][aria-pressed="true"]');
        pressedButton?.setAttribute('aria-pressed', 'false');
        target?.setAttribute('aria-pressed', 'true');
    };
    const handleThemeSelection = (event: MouseEvent) => {
        const target: HTMLElement = event.target as HTMLElement;
        const isPressed: string | null = target.getAttribute('aria-pressed');
        if (isPressed !== "true") {
            const theme: string | null = target.getAttribute('data-theme');
            if (theme !== null) {
                applyTheme(theme);
                localStorage.setItem('selected-theme', theme);
            }
        }
    };
    createEffect(() => {
        const themeSwitcher: HTMLElement | null = document.querySelector('.theme-switcher');
        if (themeSwitcher !== null) {
            const buttons: NodeListOf<HTMLButtonElement> = themeSwitcher.querySelectorAll('button');
            buttons.forEach((button: HTMLButtonElement) => {
                button.addEventListener('click', handleThemeSelection);
            });
            return () => {
                buttons.forEach((button: HTMLButtonElement) => {
                    button.removeEventListener('click', handleThemeSelection);
                });
            };
        }
    });
    return (
        <div class="theme-switcher-container">
            <BackButton/>
            <h1>Pick a theme</h1>
            <div class="theme-switcher">
                <button data-theme="moon" aria-pressed="false">Moon</button>
                <button data-theme="owl" aria-pressed="true">Owl</button>
                <button data-theme="solar" aria-pressed="false">Solar</button>
                <button data-theme="dracula" aria-pressed="false">Dracula</button>
            </div>
        </div>
    );
}