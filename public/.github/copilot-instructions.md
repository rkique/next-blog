# Copilot Instructions for ERiC xia's Personal Site

## Project Overview

This is a static personal website/blog for a researcher at Brown University. The site is a vanilla HTML/CSS/JavaScript project with no build system—all files are directly served from the `/public` directory.

## Architecture

### Core Structure
- **Root HTML files**: Individual pages ([index.html](index.html), [daily.html](daily.html), [freedom.html](freedom.html), etc.) are standalone blog posts and portfolio pieces
- **Shared JavaScript**: Common functionality in [onload.js](onload.js) and [topbar_script.js](topbar_script.js)
- **CSS System**: 
  - [fmcolors.css](fmcolors.css) - color palette using CSS custom properties
  - [fmstyle.css](fmstyle.css) - main styles
  - [fmtricks.css](fmtricks.css) - utility classes and special effects
  - External: Tachyons CSS framework (loaded via CDN)
- **Subdirectories**: Self-contained interactive projects in [summary/](summary/), [terrain/](terrain/), [arrow/](arrow/)

### Key Conventions

**1. Toggle Text Pattern** (implemented in [onload.js](onload.js))
- Elements with class `toggle` show different text on hover
- Format: `<span class="toggle">visible_text;hover_text</span>`
- Example: `<a href="mailto:eriq.xia@gmail.com"><span class="toggle">email;eriq.xia@</span></a>`

**2. Random Quote System** ([topbar_script.js](topbar_script.js))
- Displays random philosophical/artistic quotes from the `array` variable
- Uses `changeQuote()` function to rotate through quotes

**3. Email Modal Pattern**
- Consistent modal structure across pages for email capture
- Modal ID: `emailModal`, opened via `openEmailModal(event)`
- Used to collect interest in projects like word games

**4. CSS Custom Properties**
- Color palette defined in `:root` in [fmstyle.css](fmstyle.css) and [fmcolors.css](fmcolors.css)
- Examples: `--text-color`, `--header-text`, `--accent`, `--bg`
- Project-specific color schemes (e.g., [summary/vis/styles.css](summary/vis/styles.css) uses different palette)

**5. Google Analytics**
- Analytics ID: `G-637SKJYBQG`
- Standard implementation in [onload.js](onload.js) using gtag

### Self-Contained Projects

#### Summary Game ([summary/vis/](summary/vis/))
- Interactive movie plot guessing game
- Data pipeline: Python scripts in [summary/data/](summary/data/) fetch Wikipedia content
- Uses Fuse.js for fuzzy autocomplete search
- Hierarchical text splitting with "hint" system

#### 3D Terrain ([terrain/](terrain/))
- Three.js procedural terrain with raycasting
- ES6 modules importing from local [three.min.js](terrain/three.min.js)
- Custom controls via [OrbitControls.js](terrain/OrbitControls.js)

#### Arrow Visualization ([arrow/](arrow/))
- Simple DOM manipulation for text highlighting (voting theory content)
- Uses inline styling for colored emphasis

### Python Data Processing

Scripts in [summary/data/get_summaries.py](summary/data/get_summaries.py):
- Fetch Wikipedia plots using `wikipedia` library
- Scrape images from Wikipedia infoboxes with BeautifulSoup
- Save to structured directories: `text_summaries/`, `photos/`, `level_summaries/`

## Development Workflow

**No build step required**: Make edits directly to HTML/CSS/JS files. Open in browser to test.

**File organization**:
- Blog posts/essays: Root-level HTML files
- Images: Organized by topic in subdirectories ([images/](images/), [cos-images/](cos-images/), [dl-images/](dl-images/), [mun-images/](mun-images/), etc.)
- Project assets: Keep within project subdirectories

**Adding new pages**:
1. Create HTML file at root level
2. Include standard head with Google Fonts, Tachyons, and local CSS files
3. Include [onload.js](onload.js) and [topbar_script.js](topbar_script.js) for standard functionality
4. Use `toggle` class for interactive text elements

**Data updates for Summary Game**:
1. Edit [summary/vis/disney/disney_titles.csv](summary/vis/disney/disney_titles.csv) 
2. Run [get_summaries.py](summary/data/get_summaries.py) to fetch new Wikipedia content
3. Regenerate level summaries if needed

## Important Patterns

- **Don't use bundlers/transpilers**: This is intentionally vanilla JS
- **Preserve accessibility**: Alt text on images, semantic HTML
- **Keep experiments self-contained**: New interactive pieces go in their own subdirectories
- **Font usage**: Primary fonts are Inter, Averia Serif Libre, and Unica One (via Google Fonts)
- **Respect the aesthetic**: Personal, artistic, experimental web design—not corporate/polished
