import { Backlinks } from 'components'; 
// DROPDOWN https://www.skeleton.dev/utilities/local-storage-stores

export const backlinks = [
    {
        title: 'Theme',
        url: 'settings/theme'
    }
]

export default function Settings() {
    return (
        <div>
            <h1>Settings</h1>
            <Backlinks backlinks={backlinks}/>
        </div>
    );
}