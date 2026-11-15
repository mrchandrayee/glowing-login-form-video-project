# Glowing Login Form

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/glowing-login-form-video-project/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, runnable recreation of the uploaded 17-second screen recording.

## Screen elements reproduced
- Heading: **Glowing Login Form**
- Dark login card with cyan glowing border and cyan/purple ambient background
- `LOGIN` heading with cyan neon text glow
- Email Address and Password input fields
- Remember me checkbox
- Forgot Password? link
- Blue-to-cyan gradient LOGIN button
- Don't have an account? Sign Up link
- Orange framed CSS code panel

## CSS transcribed from the video

The input styling shown in the code panel is readable as:

```css
.input-box input {
  width: 100%;
  height: 55px;
  padding: 0 18px;
  background: transparent;
  border: 1px solid rgba(255,255,255,.25);
  border-radius: 10px;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  transition: .4s;
}

.input-box input:focus {
  border-color: #00eaff;
  box-shadow:
    0 0 8px #00eaff,
    0 0 20px rgba(0,234,255,.5);
  background: rgba(0,234,255,.03);
}
```

## Files
- `index.html` — login form structure and visible code sample
- `style.css` — card, ambient glow, input focus glow, gradient button and responsive styling
- `script.js` — demo validation, helper links and copy CSS action
- `README.md` — source transcription and run guide

## Run
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in your browser or use Live Server.
4. Focus either input to see the cyan glow.
5. Enter a valid email and a password of at least 6 characters to see the demo success message.
6. Use **Copy CSS** to copy the transcribed input focus code.

No npm packages or external libraries are required.

## Important
This is a front-end demo only. It does not authenticate users, store credentials or send data to a backend. The visible input CSS is transcribed from the recording; the rest of the page styling and JavaScript are reconstructed to make a complete runnable project.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
