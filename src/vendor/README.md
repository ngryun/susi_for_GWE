Vendored browser libraries for the single-file build.

- `xlsx.full.min.js`: SheetJS `xlsx` 0.18.5, Apache-2.0 license.
- `plotly.min.js`: Plotly.js 2.32.0, MIT license.

`tools/single-file.js build` inlines these files into `index.html` so the
distributed page does not depend on external CDN script loading at runtime.
