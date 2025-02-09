import classes from "./Toolbar.module.css";

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className={classes.toolbar}>
      <button
        title="Bold"
        className={editor.isActive("bold") ? classes["is-active"] : ""}
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        B
      </button>
      <button
        title="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? classes["is-active"] : ""}
      >
        <i>I</i>
      </button>
      <button
        title="Underline"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? classes["is-active"] : ""}
      >
        <u>U</u>
      </button>
      <button
        title="H1 heading"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 }) ? classes["is-active"] : ""
        }
      >
        H1
      </button>
      <button
        title="H2 heading"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 }) ? classes["is-active"] : ""
        }
      >
        H2
      </button>

      <button
        title="Bulleted List"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? classes["is-active"] : ""}
      >
        <svg
          width="14px"
          height="14px"
          viewBox="0 -3.5 29 29"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
        >
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            sketch:type="MSPage"
          >
            <g
              id="Icon-Set-Filled"
              sketch:type="MSLayerGroup"
              transform="translate(-571.000000, -210.000000)"
              fill="#000000"
            >
              <path
                d="M598,227 L582,227 C580.896,227 580,227.896 580,229 C580,230.104 580.896,231 582,231 L598,231 C599.104,231 600,230.104 600,229 C600,227.896 599.104,227 598,227 L598,227 Z M598,219 L582,219 C580.896,219 580,219.896 580,221 C580,222.104 580.896,223 582,223 L598,223 C599.104,223 600,222.104 600,221 C600,219.896 599.104,219 598,219 L598,219 Z M582,215 L598,215 C599.104,215 600,214.104 600,213 C600,211.896 599.104,211 598,211 L582,211 C580.896,211 580,211.896 580,213 C580,214.104 580.896,215 582,215 L582,215 Z M574,226 C572.343,226 571,227.343 571,229 C571,230.657 572.343,232 574,232 C575.657,232 577,230.657 577,229 C577,227.343 575.657,226 574,226 L574,226 Z M574,218 C572.343,218 571,219.343 571,221 C571,222.657 572.343,224 574,224 C575.657,224 577,222.657 577,221 C577,219.343 575.657,218 574,218 L574,218 Z M574,210 C572.343,210 571,211.343 571,213 C571,214.657 572.343,216 574,216 C575.657,216 577,214.657 577,213 C577,211.343 575.657,210 574,210 L574,210 Z"
                id="bullet-list"
                sketch:type="MSShapeGroup"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      <button
        title="Numbered List"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? classes["is-active"] : ""}
      >
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="14px"
          height="14px"
          viewBox="0 0 381.304 381.304"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M121.203,37.858c0-7.791,6.319-14.103,14.104-14.103H367.2c7.784,0,14.104,6.312,14.104,14.103
		s-6.312,14.103-14.104,14.103H135.307C127.522,51.961,121.203,45.649,121.203,37.858z M135.307,120.908h150.426
		c7.79,0,14.104-6.315,14.104-14.104c0-7.79-6.313-14.103-14.104-14.103H135.307c-7.785,0-14.104,6.307-14.104,14.103
		C121.203,114.598,127.522,120.908,135.307,120.908z M367.2,269.75H135.307c-7.785,0-14.104,6.312-14.104,14.104
		c0,7.79,6.319,14.103,14.104,14.103H367.2c7.784,0,14.104-6.312,14.104-14.103C381.304,276.062,374.984,269.75,367.2,269.75z
		 M285.727,338.693h-150.42c-7.785,0-14.104,6.307-14.104,14.104c0,7.79,6.319,14.103,14.104,14.103h150.426
		c7.79,0,14.104-6.312,14.104-14.103C299.836,345.005,293.517,338.693,285.727,338.693z M33.866,127.838h22.387V14.405H37.921
		c-0.521,5.925-0.068,10.689-4.696,14.277c-4.631,3.591-14.363,5.382-23.158,5.382H6.871v15.681h26.995V127.838z M25.603,345.147
		l28.115-20.912c9.69-6.655,16.056-12.826,19.109-18.524c3.05-5.697,4.569-11.821,4.569-18.377c0-10.716-3.585-19.357-10.737-25.941
		c-7.161-6.579-16.568-9.865-28.23-9.865c-11.245,0-20.241,3.328-26.982,9.989c-6.75,6.655-10.113,16.691-10.113,30.115H23.02
		c0-8.015,1.416-13.548,4.253-16.621c2.834-3.067,6.721-4.604,11.665-4.604s8.854,1.561,11.741,4.676
		c2.888,3.12,4.327,6.998,4.327,11.632c0,4.628-1.336,8.808-4.02,12.555c-2.675,3.747-10.125,10.071-22.352,18.962
		c-10.453,7.648-24.154,16.964-28.393,23.726L0,364.96h77.632v-19.813H25.603L25.603,345.147z"
            />
          </g>
        </svg>
      </button>
      <button
        className={editor.isActive("highlight") ? classes["is-active"] : ""}
        title="Mark Text"
        onClick={() => editor.chain().focus().toggleMark("highlight").run()}
      >
        Highlight
      </button>
    </div>
  );
};

export default Toolbar;
