// Masonry.js
import { onCleanup, createSignal, onMount, For } from "solid-js";
import data from "./masonrydata.js"; // Import the default export at the top level
import "./Masonry.css";

export default function Masonry() {
  let grids;

  function handleResize() {
    grids = document.querySelectorAll(".grid--masonry");

    grids.forEach((grid) => {
      if (!grid) return;

      try {
        const containerWidth = grid.clientWidth;
        const items = Array.from(grid.children);

        // Calculate the grid gap from computed style
        const gridGap = parseFloat(getComputedStyle(grid).gridRowGap);

        // Find the widest item's width within the grid
        const itemWidth = Math.max(
          ...items.map((item) => item.getBoundingClientRect().width)
        );

        // Calculate the number of columns based on the container width and widest item width
        const ncol = Math.floor(containerWidth / itemWidth);

        // If the number of columns has changed
        if (grid.ncol !== ncol) {
          grid.ncol = ncol;

          // Reset the margin for all items
          items.forEach((c) => c.style.removeProperty("margin-top"));

          // If we have more than one column
          if (grid.ncol > 1) {
            items.slice(ncol).forEach((c, i) => {
              const prevFin = items[i].getBoundingClientRect().bottom;
              const currIni = c.getBoundingClientRect().top;
              c.style.marginTop = `${prevFin + gridGap - currIni}px`;
            });
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }

  onMount(() => {
    // Add a delay to allow the layout to stabilize
    setTimeout(() => {
      handleResize(); // Initial handling

      // Add the event listener for resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener when the component is unmounted
      onCleanup(() => {
        window.removeEventListener("resize", handleResize);
      });
    }, 1000); // Adjust the delay time as needed
  });

  const [galleryData] = createSignal(data); // Use the imported image data here
  return (
    <div>
      <section class="grid--masonry">
        <For each={galleryData()}>
          {(image) => <img src={image.url} alt={image.alt} />}
        </For>
      </section>
    </div>
  );
}
