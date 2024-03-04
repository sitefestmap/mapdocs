// import { For } from 'solid-js';
import './DetailsSummaryTree.css';

export let mainSummary = 'Main Summary';

export function DetailsSummaryTree() {
    return(
        <ul class="tree" role="list">
            <li>
                <details open>
                    <summary>{mainSummary}</summary>
                    <ul role="list">
                        <li>
                            <details>
                                <summary>Summary</summary>
                                <ul role="list">
                                    <li>List</li>
                                    <li>List</li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Summary</summary>
                                <ul role="list">
                                    <li>List</li>
                                    <li>List</li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
    )
}