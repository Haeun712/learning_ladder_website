# Learning Ladder Website

A local website that allows educational groups to share and explore categorized educational game resources.

Built using PHP, XML, JavaScript, and CSS, the site renders game data dynamically via a custom CMS theme running on an Apache Server. Game content is managed through structured XML files and presented in a consistent, optimized layout.
> ⚠️ This website was developed and tested within a university-provided virtual machine (VM). The live site is not publicly accessible, and screenshots are unavailable due to the restricted environment.

## Features

### 🗂 XML Rendering with PHP
- A **custom PHP template** was created to process XML documents and render HTML pages dynamically.
- The application loads different game categories via GET parameters (e.g., `?category=sports`).
- Each game category page includes:
  - A heading based on the category name
  - List of games sorted alphabetically
  - Game description, cost, images, external links, search tags, etc.
  - All game data is extracted from the XML files using PHP

### 🎨 Consistent Styling
- CSS was used to ensure the rendered HTML matches the rest of the site’s look and feel.
- Mobile-friendly and layout-shift optimized.

### 🧭 Navigation
- The navigation bar links to all key pages, including general content and game category pages 

### 🍪 JavaScript Cookies
- JavaScript stores and retrieves the last viewed game category and timestamp using cookies.
- Returning visitors are shown a message with their last viewed category.

### 📄 Game Submission Form
- Users can submit game info via a fully interactive form.
- Includes:
  - Submitter details
  - Game details (all XML-required fields enforced)
  - Equipment list (add/remove with JavaScript)
  - Reviews with validation (must contain "x out of 5 stars", where x is 0–5 with one decimal place)
  - Live cost calculation and pricing category display
  - Terms and conditions checkbox (required)
  - Submit and clear buttons

### ⚙️ Website Optimization
- Images optimized using efficient formats (e.g., WebP, JPG)
- Explicit width/height to prevent layout shift
- CSS files split and loaded efficiently
- Meta tags and headers optimized for SEO
- Verified using **Lighthouse** tool for:
  - Performance
  - Accessibility
  - Best Practices
  - SEO

---
## Pages
The website consists of the following pages:
Page|Description
---|---|
Homepage|Landing page displaying a general overview and featured content.
About Us|Provides background information about Learning Ladder group and the purpose of the site.
Contact|Contact form for reaching out.
Terms and Conditions|Legal usage guidelines for the site.
Privacy Policy|Information on how user data is handled.
Add Games|Form page for users to submit new games, including validation and dynamic interactivity.
Video Games|Category page listing video games, rendered from XML via the custom PHP template.
Tabletop Games|Category page listing tabletop games, also rendered from XML using the same template.


## Technologies Used

- **PHP**
- **JavaScript**
- **CSS**
- **HTML**
- **XML + DTD**
- **GetSimple CMS** (custom theme integration)

---

## Limitations

- The application was developed within a restricted VM, and a live demo is not available.
- Screenshots and preview links cannot be included due to server inaccessibility.

---

## Notes

- Designed to demonstrate the use of structured XML data in web development.
- Emphasizes data-driven rendering and interactive client-side features.
- Fully functional within the GetSimple CMS environment.

---

## License

This project was created for educational purposes and may contain components provided as part of coursework. Please do not reuse or redistribute without appropriate attribution.
