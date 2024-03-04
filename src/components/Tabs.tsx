import { For, createSignal } from 'solid-js';
// Render a different component onClick
// Change Styleguide to Tabs
// https://codepen.io/jh3y/pen/XWGNONP segments
// https://codepen.io/jh3y/pen/MWxbrEp segments

import B from './B.md'

export let styleguides = [
   {
       title: 'Backups',
       component: B
   },
   {
       title: 'Backups2',
       component: B
   },
]

type Guide = {
   title: string;
   component: any;
};

interface StyleguidesProps {
   styleguides: Guide[];
}

export function Tabs(props: StyleguidesProps) {
   const { styleguides } = props;
   const [selectedGuide, setSelectedGuide] = createSignal(styleguides[0]);
   
    const handleLinkClick = (guide: Guide) => {
        setSelectedGuide(guide);
    };
 
   return(
       <div class="">
           <ul>
               <For each={styleguides}>
                  {(guide) => (
                      <li>
                          <a onClick={() => handleLinkClick(guide)}>{guide.title}</a>
                      </li>
                  )}
               </For>
           </ul>
           <h2>{selectedGuide().title}</h2>
           <div>{selectedGuide().component}</div> 
       </div>
   )
}
