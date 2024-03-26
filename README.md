# Site Festival Map Docs

Docs for 2023 site and a few ideas for potential 2024 additions.

WIP: Will add more content over next weeks.

CSS is currently a complete mess as I decided to finally try Tailwind halfway through putting this up.

Will put on subdomain soon. [Mapdocs](https://mapdocs.sitefestival.org.uk)

## Make a Pull request

[Map Docs](https://github.com/sitefestmap/mapdocs/pulls)

## Clone this repo

```bash
cd projects
git clone https://github.com/sitefestmap/mapdocs.git
cd mapdocs
pnpm i
pnpm dev 
```

The Docs are using an outdated version of SolidStart, updating the Shiki config is a bit tricky at the mo but will work on it soon.


## DNS

- 123reg CNAME mapdocs mapdocs.fly.dev

```bash
flyctl certs create mapdocs.sitefestival.org.uk
```