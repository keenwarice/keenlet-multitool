javascript:(() => {
    const style = document.createElement('style');
    style.textContent = `
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

    `;
    document.head.appendChild(style);
  
    const container = document.createElement('div');
    document.body.appendChild(container);
  
    const createWindow = ({ content = "", url = null, title = "unnamed window", x = 50, y = 50, width = 400, height = 300, center = false } = {}) => {
      const win = document.createElement('div');
      const bar = document.createElement('div');
      const contentEl = document.createElement('div');
      const btns = document.createElement('div');
      const r = document.createElement('div');
      const yb = document.createElement('div');
      const g = document.createElement('div');
      const titleEl = document.createElement('span');
  
      win.className = 'window123456789';
      bar.className = 'window-bar123456789';
      contentEl.className = 'window-content123456789';
      btns.className = 'window-bar-buttons123456789';
      r.className = 'button123456789 red123456789';
      yb.className = 'button123456789 yellow123456789';
      g.className = 'button123456789 green123456789';
      titleEl.className = 'window-title123456789';
      titleEl.textContent = title;
  
      btns.append(r, yb, g);
      bar.append(btns, titleEl);
      win.append(bar, contentEl);
  
      if (url) {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.pointerEvents = 'auto';
        contentEl.appendChild(iframe);
      } else {
        contentEl.innerHTML = content;
      }
  
      if (center) {
        x = (window.innerWidth - width) / 2;
        y = (window.innerHeight - height) / 2;
      }
  
      win.style.left = `${x}px`;
      win.style.top = `${y}px`;
      win.style.width = `${width}px`;
      win.style.height = `${height}px`;
  
      let dragging = false, offsetX = 0, offsetY = 0;
  
      bar.addEventListener('mousedown', e => {
        dragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
      });
      document.addEventListener('mousemove', e => {
        if (!dragging) return;
        win.style.left = `${e.clientX - offsetX}px`;
        win.style.top = `${e.clientY - offsetY}px`;
      });
      document.addEventListener('mouseup', () => dragging = false);
  
      g.onclick = () => {
        if (win.classList.contains('max123456789')) {
          win.style.width = `${width}px`;
          win.style.height = `${height}px`;
          win.style.left = `${x}px`;
          win.style.top = `${y}px`;
        } else {
          win.style.width = '100vw';
          win.style.height = '100vh';
          win.style.left = '0';
          win.style.top = '0';
        }
        win.classList.toggle('max123456789');
      };
  
      let shownHint123456789 = false;
      yb.onclick = () => {
        win.style.display = 'none';
        if (!shownHint123456789) {
          const msg = document.createElement('div');
          msg.className = 'barmsg123456789';
          msg.textContent = 'press ctrl + ~ to show window';
          document.body.appendChild(msg);
          setTimeout(() => {
            msg.style.opacity = '0';
            setTimeout(() => msg.remove(), 500);
          }, 2000);
          shownHint123456789 = true;
        }
        window.addEventListener('keyup', e => {
          if (e.ctrlKey && e.key === '`') {
            win.style.display = '';
          }
        }, { once: true });
      };
      
  
      r.onclick = () => win.remove();
  
      container.appendChild(win);
    };
  
    createWindow({ content: `
        
        
        
        
        
        
        `, title: "the start...", center: true, width: 500, height: 400 });
  })();
  