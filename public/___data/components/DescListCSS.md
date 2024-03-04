```css

.card {
	position: relative;
	margin: 0.3em;
	padding: 0.5em;
	border: 1px solid #eee;
	border-radius: 4px;
	box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
	min-height: 1em;
}

.filter {
	margin: 1rem;
}

input {
	height: 2rem;
	min-width: 30%;
	font-size: 1.2rem;
}

.container {
	margin-top: 1rem;
	border-top: 1px solid #333;
	border-bottom: 1px solid #333;
	min-height: 200px;
	height: calc(100vh - 15em);
	--flow: .5rem;
}

/*
.card::after {
	clear: both;
	display: block;
}*/


li {
	--flow: 0;
	display: flex;
	list-style: none;
}

li img {
	border: 1px solid var(--theme-colors-comment);
    background: hsl(0, 0%, 90%);
	border-radius: 50px;
	padding: .1rem;
	margin-right: .2rem;
	height: 1rem;
	width: 1rem;
}

h2 {
	font-size: 1.2rem;
}

a {
    display: flex;
    flex-wrap: wrap;
    border-bottom: none !important;
    padding: 0;
    color: var(--theme-colors-string);
}

a {
	color: var(--theme-colors-link);
	display: flex; 
	flex-wrap: wrap; 
	padding: 0 4px;
	border-bottom: 1px solid transparent;
	margin-right: 1.2em;
}

a[target="_blank"]:hover {
	border-bottom: 1px solid var(--theme-colors-link);
	margin-right: 0;
}

a[target="_blank"]:hover::after {
	content: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='%23bababa' d='M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z'%3E%3C/path%3E%3C/svg%3E");
	margin-left: 0.2em;
	width: 1em;
	height: 1em;
	
}
/*
span, a:hover::after {
	 padding-top: .5em; *
}
*/

.title {
	color: var(--theme-colors-string);
}
```