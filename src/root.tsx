// @refresh reload
import { Suspense } from "solid-js";

// If locator browser extension not installed

/*
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}
*/

import {
    A,
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start";
import "./app.css";
//import "./styles/utilities.css"
//import "./styles/shiki.css"
//import './components/Sidebar.css'

import Menu from 'components/Menu'
import menuitems from 'data/menu.js';
import Logo from 'components/Logo'
//import { DocsLink } from 'components';

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>Site Festival Map Docs</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Body>
                <ErrorBoundary>
                    <Suspense>
                        <header class="bg-[var(--color-background)] border-[var(--color-greydivider)] border-b-2">
                            <nav class="flex items-center justify-between py-4 px-0">
                                <Logo />
                                <a href="https://sitefestival.org.uk" target="_blank">Site</a>
                                <a href="https://map.sitefestival.org.uk/index.html" target="_blank">Map</a>
                                <A href="settings/theme" style="padding: .5rem">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M19 9.199h-.98c-.553 0-1 .359-1 .801c0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799c0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5c3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4c0-2.211 1.789-4 4-4v8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801c0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1c.441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143c.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z"/></svg>
                                </A>
                            </nav>
                        </header>
                        <div class="with-sidebar">
                            <div class="sidebar">
                                <nav>
                                    <Menu menuitems={menuitems} />
                                </nav>
                            </div>
                            <main>
                                <Routes>
                                    <FileRoutes />
                                </Routes>
                            </main>
                        </div>
                        <Scripts />
                    </Suspense>
                </ErrorBoundary>
            </Body>
        </Html >
    );
}