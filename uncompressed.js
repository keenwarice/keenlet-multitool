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
  .window-content123456789 input[type="text"] {
    background-color: #111;
    border: 1px solid #444;
    color: #eee;
    padding: 6px 10px;
    border-radius: 6px;
    font-family: VT323, monospace;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    transition: border 0.3s, background 0.3s;
  }
  .window-content123456789 input[type="text"]:focus {
    outline: none;
    border-color: #888;
    background-color: #222;
  }

  .spin-anim123456789 {
    animation: spin123456789 2s linear infinite;
  }

  @keyframes spin123456789 {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }

  .rgb-text123456789 {
    background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red, orange, yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rgb123456789 3s linear infinite;
    background-size: 400% 100%;
  }
  .rgb-bg123456789 {
    background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red, orange, yellow);
    animation: rgb123456789 3s linear infinite;
    background-size: 400% 100%;
  }
  @keyframes rgb123456789 {
    0% { background-position: 0% 50% }
    100% { background-position: 100% 50% }
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
  setTimeout(prepareZapper123456789, 1);
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
    <div style="border:2px solid #555;border-radius:12px;padding:20px;width:80%;max-width:400px;background:#222;display:flex;flex-direction:column;align-items:center;gap:15px;">
      <h3 style="color:white;font-family:VT323;font-size:20px;margin-bottom:10px;">Styling</h3>
      <label style="display:flex;align-items:center;gap:10px;font-family:VT323;font-size:18px;color:white;">
        <input type="checkbox" id="nightToggle123456789" style="width:20px;height:20px;">
        Night Mode
      </label>
      <label style="display:flex;align-items:center;gap:10px;font-family:VT323;font-size:18px;color:white;">
        <input type="checkbox" id="grayToggle123456789" style="width:20px;height:20px;">
        Grayscale
      </label>
    </div>

    <div style="border:2px solid #555;border-radius:12px;padding:20px;width:80%;max-width:400px;background:#222;display:flex;flex-direction:column;align-items:center;gap:15px;">
      <h3 style="color:white;font-family:VT323;font-size:20px;margin-bottom:10px;">funny</h3>
      <label style="display:flex;align-items:center;gap:10px;font-family:VT323;font-size:18px;color:white;">
      <input type="checkbox" id="spin-toggle123456789" style="width:20px;height:20px;">
        spin elements
      </label>
      <label style="display:flex;align-items:center;gap:10px;font-family:VT323;font-size:18px;color:white;">
        <input type="checkbox" id="spin-page123456789" style="width:20px;height:20px;">
        spin page
      </label>
      <label style="display:flex;align-items:center;gap:10px;font-family:VT323;font-size:18px;color:white;">
      <input type="checkbox" id="rainbow-toggle123456789" style="width:20px;height:20px;">
        RGB
      </label>
    </div>

    <div style="border:2px solid #555;border-radius:12px;padding:20px;width:80%;max-width:400px;background:#222;display:flex;flex-direction:column;align-items:center;gap:15px;">
      <h3 style="color:white;font-family:VT323;font-size:20px;margin-bottom:10px;">misc</h3>
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
      onclick="injectJS123456789();">
        inject!
      </button>

      <textarea style="
      width:90%;
      padding:10px;
      background:#333;
      color:white;
      border:2px solid #555;
      border-radius:10px;
      font-size:16px;
      font-family:VT323;
      resize:none;
      transition:background 0.3s;
    " placeholder="code here... (JS)" rows="5" id="injectJSText123456789"></textarea>
    <p style="color:red; text-align:center;" id="error123456789"></p>
    <h3 style="color:white;font-family:VT323;font-size:18px;margin-top:30px;">Embed Page</h3>
  
    <input id="embedURL123456789" style="
      width:90%;
      padding:10px;
      background:#333;
      color:white;
      border:2px solid #555;
      border-radius:10px;
      font-size:16px;
      font-family:VT323;
    " placeholder="https\:\/\/\.\.\.">

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
    onclick="let url123456789 = document.getElementById('embedURL123456789').value;createWindow123456789({ url: url123456789, title: 'page', x: 100, y: 100, width: 600, height: 400 });">embed</button>
    </div>

    <div id="aiContainer123456789" style="border:2px solid #555;border-radius:12px;padding:20px;width:80%;max-width:400px;background:#222;display:flex;flex-direction:column;align-items:center;gap:15px;transition:opacity 0.4s ease;">
      <h3 style="color:white;font-family:VT323;font-size:20px;margin-bottom:10px;">AI</h3>

      <div id="hackClubPrompt123456789" style="display:flex;flex-direction:column;align-items:center;gap:15px;transition:opacity 0.4s ease;">
        <h3 id="hackClubberText123456789" style="font-family:VT323;font-size:18px;color:white;">Are you a hack clubber?</h3>
        <div style="display: flex; gap: 10px;">
          <button id="yesBtn123456789" style="padding:10px;color:white;border:2px solid #555;border-radius:10px;font-size:18px;font-family:VT323;cursor:pointer;background:#28c840;" onmouseover="this.style.background='#45D760';this.style.transform='scale(1.05)'" onmouseout="this.style.background='#28c840';this.style.transform='scale(1)'">Yes</button>
          <button id="noBtn123456789" style="padding:10px;color:white;border:2px solid #555;border-radius:10px;font-size:18px;font-family:VT323;cursor:pointer;background:#f24c4c;" onmouseover="this.style.background='#F57A7A';this.style.transform='scale(1.05)'" onmouseout="this.style.background='#f24c4c';this.style.transform='scale(1)'">I don't know?</button>
        </div>
      </div>

      <div id="askAISection123456789" style="display:none;flex-direction:column;align-items:center;gap:10px;width:100%;">
        <input id="askAIInput123456789" placeholder="Ask AI..." style="width:100%;padding:10px;border-radius:8px;border:2px solid #555;background:#111;color:white;font-family:VT323;font-size:16px;">
        <button id="sendAIButton123456789" style="padding:10px;color:white;border:2px solid #555;border-radius:10px;font-size:18px;font-family:VT323;cursor:pointer;background:#333;" onmouseover="this.style.background='#555';this.style.transform='scale(1.05)'" onmouseout="this.style.background='#333';this.style.transform='scale(1)'">Send</button>
        <div id="aiResponse123456789" style="margin-top:10px;padding:10px;border-radius:10px;background:#111;color:#0f0;font-family:VT323;white-space:pre-wrap;width:100%;display:none;"></div>
      </div>
    </div>


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
    onclick="openSettings123456789();">
      Settings
    </button>

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
let showHotkey123456789 = { ctrl: true, key: '`' };
let hideHotkey123456789 = { ctrl: true, key: 'h' };
let msgElement123456789;

function openSettings123456789() {
  createWindow123456789({
    title: "Settings",
    content: `
      <div style="display:flex;flex-direction:column;gap:20px;font-family:VT323;color:white;">
        <div>
          <label>Show Windows Hotkey:</label>
          <input id="showKeyInput123456789" type="text" value="${showHotkey123456789.key}" style="width:50px;margin-left:10px;" placeholder="ctrl">
        </div>
        <div>
          <label>Hide Windows Hotkey:</label>
          <input id="hideKeyInput123456789" type="text" value="${hideHotkey123456789.key}" style="width:50px;margin-left:10px;" placeholder="ctrl">
        </div>
        <button id="saveHotkeys123456789" style="padding:6px 12px;background:#333;color:white;border:2px solid #555;border-radius:10px;font-size:18px;font-family:VT323;cursor:pointer;transition:background 0.3s,transform 0.2s;"
   onmouseover="this.style.background='#555';this.style.transform='scale(1.02)'"
   onmouseout="this.style.background='#333';this.style.transform='scale(1)'"
>Save Hotkeys</button>
      </div>
    `,
    center: true,
    width: 300,
    height: 250
  });
  setTimeout(() => {
    const showInput = document.getElementById('showKeyInput123456789');
    const hideInput = document.getElementById('hideKeyInput123456789');
    const saveBtn = document.getElementById('saveHotkeys123456789');
    saveBtn.onclick = () => {
      showHotkey123456789.key = showInput.value.trim() || '`';
      hideHotkey123456789.key = hideInput.value.trim() || 'h';
      updateHintText123456789();
    }
  }, 300);
}

function updateHintText123456789() {
  if (msgElement123456789) {
    msgElement123456789.textContent = `press ctrl + ${showHotkey123456789.key} to show windows`;
  }
}

document.addEventListener('keyup', e => {
  if (e.ctrlKey && e.key === showHotkey123456789.key) {
    for (const w of windows123456789) {
      w.style.display = '';
    }
  }
  if (e.ctrlKey && e.key === hideHotkey123456789.key) {
    for (const w of windows123456789) {
      w.style.display = 'none';
    }
    if (!window._shownHint123456789) {
      msgElement123456789 = document.createElement('div');
      msgElement123456789.className = 'barmsg123456789';
      msgElement123456789.textContent = `press ctrl + ${showHotkey123456789.key} to show windows`;
      document.body.appendChild(msgElement123456789);
      setTimeout(() => {
        msgElement123456789.style.opacity = '0';
        setTimeout(() => msgElement123456789.remove(), 500);
      }, 2000);
      window._shownHint123456789 = true;
    }
  }
});

setTimeout(() => {
  const nightToggle123456789 = document.getElementById('nightToggle123456789');
  const grayToggle123456789 = document.getElementById('grayToggle123456789');

  nightToggle123456789?.addEventListener('change', e => {
    if (e.target.checked) {
      // this is sort of like the thing on apple phones, where you set the tint
      document.body.style.filter = 'brightness(0.95) sepia(0.2) hue-rotate(10deg) saturate(1.2)';
    } else {

      document.body.style.filter = '';
    }
  });

  grayToggle123456789?.addEventListener('change', e => {
    // this one was not actually helpful
    // i just used it as a filler so it wouldnt look empty
    if (e.target.checked) {
      document.body.style.filter += ' grayscale(1)';
    } else {
      document.body.style.filter = document.body.style.filter.replace(/grayscale\(1\)/, '');
    }
  });
}, 500);

// the fun stuff:
// OMG OMG MAKING THE WINDOWS NOT SPIN TOOK SO LONG WHY??
document.getElementById('spin-toggle123456789').onclick = () => {
  document.querySelectorAll('*').forEach(el => {
    if (
      el !== document.body &&
      el !== document.documentElement && // this is what wasted my time, the <html> thing
      !el.closest('.window123456789') &&
      el !== document.querySelector('.window123456789').parentElement
    ) {
      el.classList.toggle('spin-anim123456789');
    }
  });
};

document.getElementById('spin-page123456789').onclick = () => {
  document.body.classList.toggle('spin-anim123456789');
};

document.getElementById('rainbow-toggle123456789').onclick = () => {
  document.querySelectorAll('*').forEach(el => {
    if (el !== document.body && el !== document.documentElement && !el.closest('.window123456789') && el !== document.querySelector('.window123456789').parentElement) {
      el.classList.toggle('rgb-text123456789');
    }
    if (el == document.body){
      el.classList.toggle('rgb-bg123456789');
    }
  });
};

function injectJS123456789() {
  const code123456789 = document.getElementById('injectJSText123456789').value;
  const error123456789 = document.getElementById('error123456789');
  error123456789.textContent = "";
  try {
    error123456789.textContent = "success!";
    error123456789.style.color = "lightgreen"; // regular green is oddly dark, i dont like it
    eval(code123456789);
  } catch (error) {
    console.error("error:", error);
    error123456789.textContent = error;
    error123456789.style.color = "red";
    alert("your code is wrong. check the console.");
  }
}


const yesBtn = document.getElementById('yesBtn123456789');
const noBtn = document.getElementById('noBtn123456789');
const promptSection = document.getElementById('hackClubPrompt123456789');
const askAISection = document.getElementById('askAISection123456789');
const askInput = document.getElementById('askAIInput123456789');
const sendBtn = document.getElementById('sendAIButton123456789');
const responseBox = document.getElementById('aiResponse123456789');
const aiContainer = document.getElementById('aiContainer123456789');

yesBtn.onclick = () => {
  promptSection.style.opacity = '0';
  setTimeout(() => {
    promptSection.style.display = 'none';
    askAISection.style.display = 'flex';
  }, 400);
};

noBtn.onclick = () => {
  aiContainer.style.opacity = '0';
  setTimeout(() => {
    aiContainer.remove();
    window.open('https://hackclub.com/slack/?reason=I%20heard%20about%20Hack%20Club%20from%20keenwarice%20(rice)', '_blank'); // shameless refferal link LOL
  }, 400);
};

sendBtn.onclick = () => {
  const userMessage = askInput.value.trim();
  if (!userMessage) return;
  responseBox.style.display = 'none';
  responseBox.style.color = '#0f0';
  responseBox.textContent = 'i\'m thinking...';
  responseBox.style.display = 'block';

  fetch('https://ai.hackclub.com/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [
        {
          role: 'system',
          content: `You are KeenLM Lite. You are running on a JavaScript multitool on somebody's browser. You provide witty responses, but you provide accurate, nonwitty information when doing something serious. Such as the essay when making an essay. You were created by keenwarice (rice), a software developer, but sponsored by an organization called Hack Club. Dont mention them unnecessarily.`
        },
        {
          role: 'user',
          content: userMessage
        }
      ]
    })
  })
  .then(res => res.json())
  .then(data => {
    const reply = data.choices?.[0]?.message?.content?.trim() || 'no response.';
    responseBox.textContent = reply
  })
  .catch(err => {
    console.error('error:', err);
    responseBox.style.color = '#f44';
    responseBox.textContent = 'sorry. there was an error. try again later.';
  });
};
