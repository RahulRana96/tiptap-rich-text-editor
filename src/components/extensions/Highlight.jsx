import { Mark, mergeAttributes } from "@tiptap/core";
import classes from "./Highlight.module.css";

// Create a custom highlight mark extension
export const Highlight = Mark.create({
  // Name the custom mark 'highlight'
  name: "highlight",

  // Parse HTML and return elements that should be recognized as the highlight mark
  parseHTML() {
    return [{ tag: "span" }]; // Look for <span> elements in the HTML
  },

  // Render the highlight mark back into HTML with a custom CSS class
  renderHTML({ HTMLAttributes }) {
    return [
      "span", // Wrap the content with a <span> tag
      mergeAttributes(HTMLAttributes, { class: classes.highlight }), // Merge the HTML attributes and add the CSS class
      0,
    ];
  },
});
