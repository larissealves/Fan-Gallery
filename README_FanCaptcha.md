
# 🧩 Custom reCAPTCHA Generator – *Fan Gallery*

## 📌 Project Overview

**Custom reCAPTCHA Generator** is a playful and personalized alternative to the traditional CAPTCHA.  
It allows users to create a visual "Select all images with..." CAPTCHA using pictures of celebrities, friends — or themselves.

Users upload 3 reference images and 1 of themselves via upload or camera. A final gallery is generated, simulating a meme-style CAPTCHA, which can be exported as an image.

---

## 🎯 Features

- 📷 Upload or use webcam for personalized image input
- 🧠 Editable prompt (e.g., "Jackson’s boyfriend")
- ✅ Visual "check" overlay on user’s own image
- 🌐 Fully client-side (no backend required)
- 💾 Export your CAPTCHA layout as an image
- 🎨 Styled with Tailwind CSS + responsive design
- 💜 Popups for inspiration and developer support (QR code + links)

---

## 🚀 Live Demo

> *(Optional: Add your deployed site link here)*  
> Example: [View Live](https://yourdomain.com)

---

## ▶️ Getting Started Locally

### ✅ Requirements

- Node.js v16 or higher
- npm or yarn

### 🧪 Installation & Run

```bash
# 1. Clone the repo
git clone https://github.com/your-username/fan-gallery-captcha.git
cd fan-gallery-captcha

# 2. Install dependencies
npm install
# or
yarn

# 3. Start the dev server
npm run dev
# or
yarn dev
```

Open your browser at [http://localhost:5173](http://localhost:5173)

---

## 🧱 Project Structure

```
/src
├── App.jsx               # Main app logic (image handling, export, layout)
├── PopupInspiration.jsx # Modal with visual examples
├── PopupSupport.jsx     # Modal with QR code, donation links
├── images/              # Contains iconCheck, example photos, qr-code
├── styles/popup.css     # Custom modal styling
```

---

## 📦 Tech Stack

- **React** – UI library
- **Tailwind CSS** – Utility-first CSS framework
- **html2canvas** – HTML export as image
- **MUI Icons** – Material Design icons
- **Vite** – Fast dev server and build tool

---

## 💡 Customization

- You can adjust the placeholder caption (e.g., `"XXX BOYFRIEND"`) in the input field
- Icons, layout size, or export resolution can be changed in `App.jsx`
- Popup images (`img-yin.jpg`, `img-war.jpg`) can be replaced to reflect your brand or audience

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 🧑‍💻 Author

Developed by [@larisseralves](https://linktr.ee/larisseralves)  
Feel free to support via PIX, Wise, or PayPal:

- 💌 **PIX / PayPal**: `alves.larisser@gmail.com`
- 🌍 **Wise**: `larisser4`

---

## 📄 License

This project is open-source and free to use.
