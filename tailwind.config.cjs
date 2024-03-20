/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
     /* gridTemplateColumns: {
        'conditional':'repeat(auto-fit, minmax(4rem, 1fr))'
      } */
	  content: {
        'extLinkIcon': 'url("ext-link.svg")',
      },
    }
  },
  plugins: []
};

/*

import type { Config } from 'tailwindcss';
import pluginCreator from 'tailwindcss/plugin';

export default {
	content: ['./index.html', './app\/**\/*.{js,ts,jsx,tsx}'],  (get rid of \ \)
	theme: {
		extend: {},
	},
	plugins: [
		pluginCreator(function ({ addUtilities, theme }) {
			addUtilities({
				'.debug': {
					'@apply border border-red-500': {},
				},
				'.horizontal': {
					'@apply flex flex-row': {},
				},
				'.vertical': {
					'@apply flex flex-col': {},
				},
				'.horizontal.center-v': {
					' @apply items-center': {},
				},
				'.horizontal.center-h': {
					'@apply justify-center': {},
				},
				'.horizontal.center': {
					'@apply justify-center items-center': {},
				},
				'.vertical.center-v': {
					'@apply justify-center': {},
				},
				'.vertical.center-h': {
					'@apply items-center': {},
				},
				'.vertical.center': {
					'@apply justify-center items-center': {},
				},
				'.space-between': {
					'@apply justify-between': {},
				},
			});
		}),
	],
} satisfies Config;
*/