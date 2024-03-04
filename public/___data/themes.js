const themes = {
    Moon: {
        colors: {
            text: '#b3b9c5',
            background: '#2d2d2d',
            background_code: 'hsl(0 0% 25%)',
            body_background: '#3d3d3d',
            comment: '#777c85',
            string: '#92d192',
            string_expression: '#6ab0f3', // class/tag
            //constant: '#82AAFF', // builtin
            constant: '#76d4d6', // user
            keyword: '#ffeea6',
            function: '#ffffff',
            parameter: 'ffd479', // attribute
            punctuation: '#ac8d58', // operator
            link: 'hsl(231 100% 80%)',

            greydivider: 'rgb(49, 49, 49)',
        }
    },
    Dracula: {
        colors: {
            text: 'hsl(60 30% 96%)',
            background: 'hsl(231 15% 18%)',
            background_code: 'hsl(135 94% 5%)',
            body_background: 'hsl(231 15% 22%)',
            constant: 'hsl(265 89% 78%)',
            string: 'hsl(65 92% 76%)',
            comment: 'hsl(225 27% 51%)',
            keyword: 'hsl(326 100% 74%)',
            parameter: 'hsl(31 100% 71%)',
            function: 'hsl(135 94% 65%)',
            string_expression: 'hsl(65 92% 76%)',
            punctuation: 'hsl(326 100% 74%)',
            link: 'hsl(265 89% 78%)',

            greydivider: 'rgb(49, 49, 49)',
        }
    },
    Solar: {
        colors: {
            text: '#657B83',
           // background: '#F7F0E0', 
          //  background: '#FDF6E3',
            background: 'hsl(44 87% 94%)',
            background_code: 'hsl(205 69% 5%)',
            body_background: 'hsl(44 87% 98%)',
            comment: '#93A1A1',
            string: '#2AA198',
            string_expression: '#2AA198',
            //keyword: '#859900', 
            keyword: '#6C71C4',
            function: '#268BD2', // 205 69 49
            //constant: '#B58900', // builtin
            constant: '#CB4B16', // user
            parameter: '#268BD2',
            punctuation: '#DC322F',
           // link: '#CF4B56',
            link: 'hsl(200 50% 50%)',
            greydivider: 'rgb(234, 234, 234)',

        }
    },
    Owl: {
        colors: {
            text: '#D6DEEB',
            // background: '#011627',
            background: 'hsl(207, 95%, 8%)',
           
            background_code: 'hsl(276 68% 20%)',
            body_background: 'hsl(207, 95%, 10%)',
            comment: '#637777',
            string: '#ECC48D',
            string_expression: '#ECC48D',
            //constant: '#82AAFF', // builtin
            constant: '#82AAFF', // user
            keyword: '#C792EA',
            function: '#C792EA', // 276 68 75
            parameter: '#7FDBCA', //variabel parameter function
            punctuation: '#7FDBCA', // mata tag
            link: 'hsl(231 100% 81%)',

            greydivider: 'rgb(49, 49, 49)',
        }
    },
}

export default themes;