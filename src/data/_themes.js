// Copy fro github svelte-themer : FINISH
// ADD MORE COLORS in NODE MODULES / Svelte-themer
const themes = {
    Owl: {
        colors: {
        text: '#282230',
        bodytext: 'hsl(0, 0%, 95%)', 
        background: {
          _: '#011627',
          contrast: '#b1b1b1',
        },
        primary: 'hsl(221, 100%, 55.5%)',
        link: 'hsl(221, 100%, 55.5%)',
        taglinks: 'hsl(221, 100%, 75.5%)',
        primary_dark: '#016159',
        secondary: '#562931',
        function: 'rgb(130, 170, 255)',
        tag: 'rgb(127, 219, 202)',
        selector: 'rgb(199, 146, 234)', 
        comment: 'hsl(180, 7%, 70%)',
        punctuation: 'rgb(199, 146, 234)',
        keyword: 'rgb(127, 219, 202)',
        property: 'rgb(128, 203, 196)',
        attrname: 'rgb(173, 219, 103)',
        inserted: 'rgb(173, 219, 103)',
        string: 'rgb(173, 219, 103);',
        url: 'rgb(173, 219, 103);',
        attrvalue: 'rgb(255, 203, 139)',
      //  attrname: 'rgb(173, 219, 103)',
        operator: 'rgb(127, 219, 202)',
        symbol: 'rgb(128, 203, 196);',
        boolean: 'rgb(255, 88, 116);',
        number: 'rgb(247, 140, 108);',
        constant: 'rgb(130, 170, 255);',
        builtin: 'rgb(130, 170, 255);',
        char: 'rgb(130, 170, 255);',
        doctype: 'rgb(199, 146, 234)',
        classname: 'rgb(255, 203, 139);',
        atrule: 'rgb(255, 203, 139)',
        regex: 'rgb(214, 222, 235);',
        important: 'rgb(214, 222, 235);',
        variable: 'rgb(214, 222, 235);',
        namespace: 'rgb(178, 204, 214);',
        delimiter: 'rgb(127, 219, 202);', // Not found (temp: Same as tag)
        deleted: 'rgba(239, 83, 80, 0.56)'
        },
    },
    Dracula: {
        colors: {
            text: '#282230',
            bodytext: 'hsl(0, 0%, 95%)',
            background: {
            _: '#282a36',
            contrast: '#0d1215',
            },
            primary: '#333',
            link: 'hsl(191, 97%, 40%)', // hsl(191, 97%, 77%)
            taglinks: '#f1fa8c',
            primary_dark: '#00887c',
            secondary: '#fe8690',
            function: '#f1fa8c', 
            tag: '#ff5555',
            selector: '#50fa7b',
            comment: '#6272a4', 
            punctuation: 'orange',
            keyword: '#8be9fd', 
            property: '#ff5555',
            attrname: '#50fa7b',
            attrvalue: '#f1fa8c'
        },
    },
}

export default themes;

/* TOMORROW NIGHT 80S
#2d2d2d Background
#393939 Current Line
#515151 Selection
#cccccc Foreground
#999999 Comment
#f2777a Red
#f99157 Orange
#ffcc66 Yellow
#99cc99 Green
#66cccc Aqua
#6699cc Blue
#cc99cc Purple
*/