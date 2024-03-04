import './DataTable.css'
import { For } from 'solid-js'

type TableProps = {
    table: {
      caption?: string;
      headers: string[];
      rows: string[][];
    };
  };

export function DataTable(props: TableProps) {
    const { table } = props; 
    return (
        <div class="table-container" tabindex="0" role="group" aria-labelledby="caption">
            <table>
                {table.caption && <caption id="caption">{table.caption}</caption>}
                <thead>
                    <tr>
                        <For each={table.headers}>
                            {(header) => (
                                <th scope="col">{header}</th>
                            )}
                        </For>
                    </tr>
                </thead>
                <tbody>
                    <For each={table.rows}>
                        {(row) => (
                            <tr>
                                <For each={row}>
                                    {(tabledata) => (
                                        <td>{tabledata}</td>
                                    )}
                                </For>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </div>
    )
}
