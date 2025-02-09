Custom Rich Text Editor with TipTap

Overview

This project is a React-based rich text editor built using TipTap. It mimics basic functionality similar to Google Docs, including text formatting, lists, headings, and a custom highlight option.

Features

✅ Basic Formatting: Bold, Italic, Underline, Headings, Lists✅ Content Persistence: Save & Load editor content from local storage✅ Custom Extension: for highlighting text✅ Keyboard Shortcuts: Ctrl + B for bold✅ Responsive UI: Editor updates in real-time

Installation & Setup

Clone the repository:

git clone YOUR_GITHUB_REPO_URL

cd texteditor

Install dependencies:

npm install

Start the development server:

npm run dev

How It Works

The editor is built using @tiptap/react and @tiptap/starter-kit.

Users can apply formatting via a toolbar or keyboard shortcuts.

The "Highlight" custom extension highlights marked text.

Content is saved in localStorage and can be reloaded.

File Structure

/texteditor
│── /src
│ │── /components
│ │ ├── Editor.js (Main editor component)
│ │ ├── Toolbar.js (Formatting toolbar)
│ │── /extensions
│ │ ├── Highlight.js (Custom TipTap extension)
│ ├── App.js (Main entry point)
│── public/
│── package.json
│── README.md

Deployment

To deploy the project using Vercel:

npm install -g vercel
vercel

License

This project is open-source under the MIT License.

Contact

For any questions, feel free to reach out at rannarahul1996@gmail.com or create an issue on GitHub!
