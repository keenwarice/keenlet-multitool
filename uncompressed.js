const style123456789 = document.createElement('style');
style123456789.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  /*i just put numbers after the classnames just in case a page already has those*/
  .window123456789 {
    position: absolute;
    width: 400px;
    height: 300px;
    background-color: #222;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    resize: both;
    color: white;
    z-index: 999999;
    font-family: vt323;
  }
  .window-bar123456789 {
    background-color: #333;
    padding: 5px;
    display: flex;
    align-items: center;
    cursor: grab;
  }
  .window-bar-buttons123456789 {
    display: flex;
    gap: 6px;
    margin-right: auto;
  }
  .button123456789 {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .green123456789 { background-color: #28c840; }
  .yellow123456789 { background-color: #f9c80e; }
  .red123456789 { background-color: #f24c4c; }
  .window-title123456789 {
    margin-left: 10px;
    font-size: 14px;
    color: white;
  }
  .window-content123456789 {
    flex: 1;
    padding: 10px;
    overflow: auto;
  }
  .barmsg123456789 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(100, 100, 100, 0.8);
    color: white;
    font-family: monospace;
    font-size: 18px;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 999999;
    opacity: 1;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }
  button#zap-start123456789, button#zap-confirm123456789 {
    background: #444;
    color: white;
    border: 1px solid rgb(102, 102, 102);
    padding: 6px 12px;
    border-radius: 6px;
    font-family: inherit;
    font-size: 16px;
    transition: background 0.3s;
  }
  button#zap-start123456789:hover, button#zap-confirm123456789:hover {
    background: rgb(102, 102, 102);
  }
  input#zap-slider123456789 {
    width: 100%;
    accent-color: red;
  }
`;
document.head.appendChild(style123456789);

const container123456789 = document.createElement('div');
document.body.appendChild(container123456789);

const windows123456789 = [];

const createWindow123456789 = ({ content = "", url = null, title = "unnamed window", x = 50, y = 50, width = 400, height = 300, center = false } = {}) => {
  const win123456789 = document.createElement('div');
  const bar123456789 = document.createElement('div');
  const contentEl123456789 = document.createElement('div');
  const btns123456789 = document.createElement('div');
  const r123456789 = document.createElement('div');
  const yb123456789 = document.createElement('div');
  const g123456789 = document.createElement('div');
  const titleEl123456789 = document.createElement('span');

  win123456789.className = 'window123456789';
  bar123456789.className = 'window-bar123456789';
  contentEl123456789.className = 'window-content123456789';
  btns123456789.className = 'window-bar-buttons123456789';
  r123456789.className = 'button123456789 red123456789';
  yb123456789.className = 'button123456789 yellow123456789';
  g123456789.className = 'button123456789 green123456789';
  titleEl123456789.className = 'window-title123456789';
  titleEl123456789.textContent = title;

  btns123456789.append(r123456789, yb123456789, g123456789);
  bar123456789.append(btns123456789, titleEl123456789);
  win123456789.append(bar123456789, contentEl123456789);

  if (url) {
    const iframe123456789 = document.createElement('iframe');
    iframe123456789.src = url;
    iframe123456789.style.width = '100%';
    iframe123456789.style.height = '100%';
    iframe123456789.style.border = 'none';
    iframe123456789.style.pointerEvents = 'auto';
    contentEl123456789.appendChild(iframe123456789);
  } else {
    contentEl123456789.innerHTML = content;
  }

  if (center) {
    x = (window.innerWidth - width) / 2;
    y = (window.innerHeight - height) / 2;
  }

  win123456789.style.left = `${x}px`;
  win123456789.style.top = `${y}px`;
  win123456789.style.width = `${width}px`;
  win123456789.style.height = `${height}px`;

  let dragging123456789 = false, offsetX123456789 = 0, offsetY123456789 = 0;

  bar123456789.addEventListener('mousedown', e => {
    dragging123456789 = true;
    offsetX123456789 = e.clientX - win123456789.offsetLeft;
    offsetY123456789 = e.clientY - win123456789.offsetTop;
  });
  document.addEventListener('mousemove', e => {
    if (!dragging123456789) return;
    win123456789.style.left = `${e.clientX - offsetX123456789}px`;
    win123456789.style.top = `${e.clientY - offsetY123456789}px`;
  });
  document.addEventListener('mouseup', () => dragging123456789 = false);

  g123456789.onclick = () => {
    if (win123456789.classList.contains('max123456789')) {
      win123456789.style.width = `${width}px`;
      win123456789.style.height = `${height}px`;
      win123456789.style.left = `${x}px`;
      win123456789.style.top = `${y}px`;
    } else {
      win123456789.style.width = '100vw';
      win123456789.style.height = '100vh';
      win123456789.style.left = '0';
      win123456789.style.top = '0';
    }
    win123456789.classList.toggle('max123456789');
  };

  yb123456789.onclick = () => {
    win123456789.style.display = 'none';
    if (!window._shownHint123456789) {
      const msg123456789 = document.createElement('div');
      msg123456789.className = 'barmsg123456789';
      msg123456789.textContent = 'press ctrl + ~ to show windows';
      document.body.appendChild(msg123456789);
      setTimeout(() => {
        msg123456789.style.opacity = '0';
        setTimeout(() => msg123456789.remove(), 500);
      }, 2000);
      window._shownHint123456789 = true;
    }
  };

  r123456789.onclick = () => win123456789.remove();

  container123456789.appendChild(win123456789);
  windows123456789.push(win123456789);
};

document.addEventListener('keyup', e => {
  if (e.ctrlKey && e.key === '`') {
    for (const w123456789 of windows123456789) {
      w123456789.style.display = '';
    }
  }
});

//yes, weird, but it wouldnt work without it, and i think the hoisting made it not work with the onclick below? i dont know, but if it isnt broken dont fix it?
window.elementZapper = function() {
  createWindow123456789({
    title: "element zapper",
    content: `
      <div id="zap-controls123456789" style="display:flex;flex-direction:column;gap:10px">
        <button id="zap-start123456789">select element</button>
        <input type="range" id="zap-slider123456789" min="0" value="0" step="1">
        <button id="zap-confirm123456789">zap!</button>
        <p id="plesBePatientBro">LOADING... PLEASE BE PATIENT.</p>
      </div>
    `,
    center: true,
    width: 300,
    height: 200
  });
  setTimeout(prepareZapper123456789, 5000);
};

//make the windows
createWindow123456789({ content: `
  <div style="display:flex;flex-direction:column;align-items:center;gap:20px;margin-top:20px;">
    <h2 style="color:white;font-size:26px;font-family:VT323;">Tool Menu</h2>
    <div style="border:2px solid #555;border-radius:12px;padding:20px;width:80%;max-width:400px;background:#222;display:flex;flex-direction:column;align-items:center;gap:15px;">
      <h3 style="color:white;font-family:VT323;font-size:20px;margin-bottom:10px;">Site Manipulation</h3>
      <button style="
        width:90%;
        padding:10px;
        background:#333;
        color:white;
        border:2px solid #555;
        border-radius:10px;
        font-size:18px;
        font-family:VT323;
        cursor:pointer;
        transition:background 0.3s,transform 0.2s;
      " 
      onmouseover="this.style.background='#555';this.style.transform='scale(1.02)'"
      onmouseout="this.style.background='#333';this.style.transform='scale(1)'"
      onclick="elementZapper();">
        Element Zapper
      </button>
      <label style="display:flex;align-items:center;gap:10px;font-family:VT323;font-size:18px;color:white;">
        <input type="checkbox" id="editToggle123456789" style="width:20px;height:20px;">
        Edit Page
      </label>
    </div>
  </div>
`, title: "tool menu", center: true, width: 500, height: 400 });

// i found a bookmarklet for this edit page thing on github somewhere, i just put it into here
setTimeout(() => {
  const editToggle123456789 = document.getElementById('editToggle123456789');
  if (editToggle123456789) {
    editToggle123456789.addEventListener('change', e => {
      if (e.target.checked) {
        document.body.contentEditable = 'true';
        document.designMode = 'on';
        void 0;
      } else {
        document.body.contentEditable = 'false';
        document.designMode = 'off';
        void 0;
      }
    });
  }
}, 500);

//zapper things:
function prepareZapper123456789() {
  let zapTarget123456789 = null;
  let zapPath123456789 = [];

  let plesBePatient123456789 = document.getElementById("plesBePatientBro");
  plesBePatient123456789.textContent = "ready to start zappering!";
  const highlightBox123456789 = document.createElement('div');
  highlightBox123456789.style.position = 'absolute';
  highlightBox123456789.style.border = '2px solid red';
  highlightBox123456789.style.backgroundColor = 'rgba(255,0,0,0.2)';
  highlightBox123456789.style.pointerEvents = 'none';
  highlightBox123456789.style.zIndex = 999999;
  highlightBox123456789.style.display = 'none';
  document.body.appendChild(highlightBox123456789);

  const getBounds123456789 = el123456789 => {
    const rect123456789 = el123456789.getBoundingClientRect();
    highlightBox123456789.style.left = `${rect123456789.left + window.scrollX}px`;
    highlightBox123456789.style.top = `${rect123456789.top + window.scrollY}px`;
    highlightBox123456789.style.width = `${rect123456789.width}px`;
    highlightBox123456789.style.height = `${rect123456789.height}px`;
    highlightBox123456789.style.display = 'block';
  };

  const zapSlider123456789 = document.getElementById('zap-slider123456789');
  const startButton123456789 = document.getElementById('zap-start123456789');
  const zapButton123456789 = document.getElementById('zap-confirm123456789');

  let selecting123456789 = false;

  startButton123456789.onclick = () => {
    selecting123456789 = true;
    document.body.style.cursor = 'crosshair';

    const hoverHandler123456789 = e123456789 => {
      if (!selecting123456789) return;
      if (e123456789.target.id?.includes('123456789')) return;

      zapTarget123456789 = e123456789.target;
      zapPath123456789 = [];
      let current123456789 = zapTarget123456789;
      while (current123456789) {
        zapPath123456789.push(current123456789);
        current123456789 = current123456789.parentElement;
      }

      zapSlider123456789.max = zapPath123456789.length - 1;
      zapSlider123456789.value = 0;
      getBounds123456789(zapPath123456789[0]);
      e123456789.preventDefault();
      e123456789.stopPropagation();
    };

    const clickHandler123456789 = e123456789 => {
      if (!selecting123456789) return;
      e123456789.preventDefault();
      e123456789.stopPropagation();
      selecting123456789 = false;
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', hoverHandler123456789, true);
      document.removeEventListener('click', clickHandler123456789, true);
    };

    document.addEventListener('mousemove', hoverHandler123456789, true);
    document.addEventListener('click', clickHandler123456789, true);
  };

  zapSlider123456789.oninput = () => {
    const selected123456789 = zapPath123456789[+zapSlider123456789.value];
    if (selected123456789) getBounds123456789(selected123456789);
  };

  zapButton123456789.onclick = () => {
    const selected123456789 = zapPath123456789[+zapSlider123456789.value];
    if (selected123456789 && selected123456789.parentElement) {
      selected123456789.parentElement.removeChild(selected123456789);
      highlightBox123456789.style.display = 'none';
    }
  };
}
