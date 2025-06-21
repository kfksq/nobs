# Company Portfolio Landing Page

A clean, professional landing page featuring animated rotating text built with React. Perfect for company presentations and portfolio showcases.

## ✨ Features

- **Rotating Text Animation**: Smooth, eye-catching text transitions inspired by [ReactBits](https://reactbits.dev/text-animations/rotating-text)
- **Responsive Design**: Works perfectly on all device sizes
- **Professional Styling**: Clean design with gradient text effects
- **Fast Performance**: Optimized React components
- **Deployment Ready**: Built for easy hosting

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Visit `http://localhost:3000` to view the site.

### Build for Production

```bash
# Create production build
npm run build
```

The `build` folder will contain the production-ready files.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
1. Push this project to GitHub
2. Connect your GitHub repo to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `build`
5. Deploy automatically!

### Option 2: Vercel
1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload the `build` folder contents to your web host
3. Configure your server to serve `index.html` for all routes

## 🎨 Customization

### Changing the Rotating Words
Edit the `words` array in `src/App.jsx`:
```jsx
const words = ['Innovative', 'Creative', 'Professional', 'Strategic', 'Dynamic'];
```

### Adjusting Animation Speed
Modify the `interval` prop (in milliseconds):
```jsx
<RotatingText words={words} interval={2500} />
```

### Styling
- Main styles: `src/App.css`
- Rotating text styles: `src/RotatingText.css`
- Background color: Change `#0c1821` in `src/App.css`

## 📱 Technical Stack

- **React 18**: Modern React with hooks
- **CSS3**: Custom animations and responsive design
- **Inter Font**: Clean, professional typography
- **Create React App**: Zero-config build setup

## 🔧 Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Main styling
├── RotatingText.jsx # Rotating text animation component
├── RotatingText.css # Animation-specific styles
├── index.js         # React entry point
└── index.css        # Global styles

public/
└── index.html       # HTML template
```

## 📈 Future Enhancements

This landing page is designed to grow with your company. Consider adding:
- Navigation menu
- About section
- Services showcase
- Contact form
- Team profiles
- Project portfolio

---

**Ready to deploy?** Choose your preferred hosting option above and go live in minutes! 