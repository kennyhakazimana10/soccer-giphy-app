# Soccer Giphy Fetch

This project uses the Giphy API to load and display GIFs on the page.  
By default, it loads soccer-related gifs, and users can also search for any keyword.

## How It Works
1. Open `index.html` in a browser.
2. Type a keyword or leave the field empty.
3. Click the **Fetch GIFs** button.
4. The results will appear below the button.

## Files
- index.html – page layout and Bootstrap
- style.css – basic styling
- script.js – JavaScript logic
- README.md – project info

## API Key
A free key from [Giphy Developers](https://developers.giphy.com/) is needed.
Replace the placeholder in `script.js` with your key:
```js
const apiKey = "YOUR_API_KEY_HERE";
