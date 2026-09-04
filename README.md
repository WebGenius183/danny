# Daniel Studio 🎵

A modern, dark-themed one-page website for **Daniel Studio**, a music production and audio services brand.

Built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build tools, and no complicated setup.

## ✨ Features

* 🎙️ **Hero Section** — Animated red waveform background with a looping typewriter headline
* 👤 **Studio Bio** — Introduction section with a portrait layered over a styled color block
* 🎧 **Audio Samples** — Custom audio player with:

  * Play / pause controls
  * Scrubbable progress bar
  * Track duration and countdown timer
  * Automatic pause when another track starts
* 📩 **Contact Section** — Contact form and studio information
* 📱 **Responsive Navigation** — Mobile-friendly hamburger menu below 900px
* ♿ **Reduced Motion Support** — Animations respect `prefers-reduced-motion`
* ⚡ **No Build Step** — Open the project directly in a browser or use any static server

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **Canvas API**
* **Typed.js**
* **HTML5 Audio API**

## 📁 Project Structure

```text
Daniel-Studio/
│
├── index.html          # Main page markup
├── style.css           # Website styling
├── wave.js             # Animated canvas waveform
├── typewriter.js       # Typewriter headline effect
├── player.js           # Custom audio player
├── nav.js              # Mobile navigation
│
├── audio/
│   └── *.mp3           # Audio sample tracks
│
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/daniel-studio.git
```

### 2. Navigate into the project

```bash
cd daniel-studio
```

### 3. Add your audio samples

Place your `.mp3` files inside the `audio/` directory.

Make sure the filenames match the `data-src` attributes used in `index.html`.

Example:

```text
audio/
├── track-01.mp3
├── track-02.mp3
└── track-03.mp3
```

### 4. Add your branding

Replace the placeholder logo and portrait with your own studio assets.

Update the studio information, contact details, and sample track names in `index.html`.

### 5. Run the website

No build process is required.

You can simply open:

```text
index.html
```

in your browser.

Alternatively, run a local static server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## 🎨 Animated Waveform

The background animation is handled by `wave.js`.

It uses the **HTML Canvas API** to create a red waveform effect behind the website content.

The canvas uses:

```css
pointer-events: none;
```

so the animation never interferes with buttons, links, or other interactions.

The animation also automatically respects the user's system motion preferences through:

```css
@media (prefers-reduced-motion: reduce)
```

## ⌨️ Typewriter Effect

The hero headline uses **Typed.js**, loaded through a CDN.

The effect continuously types and deletes the headline while allowing highlighted words to use HTML styling.

Typed.js is loaded directly in `index.html`, so no npm installation or build process is required.

## 🎧 Audio Player

The custom audio player is powered by `player.js` and the browser's native **HTML5 Audio API**.

Each track can include a `data-src` attribute:

```html
<div class="track" data-src="audio/track-01.mp3">
```

The player provides:

* Play / pause
* Progress tracking
* Click-to-seek
* Track duration
* Remaining time
* Automatic pause of other tracks

Only one sample can play at a time.

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

The navigation switches to a fullscreen hamburger menu on smaller screens.

The menu also prevents background scrolling while it is open and uses staggered link animations for a smoother experience.

## 📩 Contact Form

The contact form is currently **frontend-only**.

To receive submissions, connect the form to a service such as Formspree.

For example:

```html
<form action="YOUR_FORMSPREE_ENDPOINT" method="POST">
```

You can also replace Formspree with your preferred form-handling service or backend.

## ⚙️ Customization

Before deploying, update the following:

### Studio Information

Edit the studio name, description, location, phone number, email address, and social links in `index.html`.

### Audio Tracks

Replace the placeholder `.mp3` files with your own samples.

### Branding

Replace the placeholder logo, portrait, and other imagery.

### Colors

The primary visual style uses a dark background with red accents. Colors can be customized in `style.css`.

## 🌐 Deployment

Because this is a static website, it can be deployed to platforms such as:

* GitHub Pages
* Vercel
* Netlify
* Cloudflare Pages
* Any traditional web server

No Node.js installation or build command is required.

## 📄 License

This project is available for personal and commercial use.

If you plan to reuse the design or code, consider adding your own license and attribution requirements here.

---

### Built for Daniel Studio 🎶

A simple, modern web presence for showcasing music, production work, and audio services.
