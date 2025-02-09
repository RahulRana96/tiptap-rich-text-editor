import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Button from "../UI/Button";
import { Highlight } from "../extensions/Highlight";
import Underline from "@tiptap/extension-underline";
import classes from "./Editor.module.css";

const EditorComponent = () => {
  // Initialize the editor with necessary extensions
  const editor = useEditor({
    extensions: [
      // Configure StarterKit with keyboard shortcut for bold
      StarterKit.configure({
        bold: { keyboardShortcut: "Mod-b" }, // Mod = Ctrl on Windows, Cmd on Mac
      }),
      Highlight, // Custom Highlight extension to apply a mark to text
      Underline, // Built-in Underline extension
    ],
    content: "<p>Hello, there!</p>", // Initial content of the editor
  });

  // Handler to save content to localStorage
  const SaveHandler = () => {
    try {
      // Check if editor is initialized
      if (editor) {
        const content = editor.getJSON(); // Get the current editor content as JSON
        localStorage.setItem("editorContent", JSON.stringify(content)); // Save content to localStorage
        alert("Content saved!"); // Show success message
      } else {
        alert("Editor is not initialized."); // Show error if editor is not initialized
      }
    } catch (error) {
      // Log and show any errors while saving content
      console.error("Error saving content:", error);
      alert("There was an error saving the content. Please try again.");
    }
  };

  // Handler to load content from localStorage
  const loadHandler = () => {
    try {
      const savedContent = localStorage.getItem("editorContent"); // Retrieve content from localStorage
      if (savedContent && editor) {
        editor.commands.setContent(JSON.parse(savedContent)); // Set the editor content from stored JSON
        alert("Content loaded!"); // Show success message
      } else if (!savedContent) {
        alert("No content found to load."); // Show message if no saved content
      } else {
        alert("Editor is not initialized."); // Show error if editor is not initialized
      }
    } catch (error) {
      // Log and show any errors while loading content
      console.error("Error loading content:", error);
      alert("There was an error loading the content. Please try again.");
    }
  };

  return (
    <div>
      {/* Render the toolbar with editor instance */}
      <Toolbar editor={editor} />

      {/* Editor content container with custom class for styling */}
      <EditorContent editor={editor} className={classes.editorcontent} />

      {/* Buttons to save and load editor content */}
      <Button name="Save" onClick={SaveHandler} />
      <Button name="Load" onClick={loadHandler} />
    </div>
  );
};

export default EditorComponent;
