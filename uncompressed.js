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
      button#zap-start123456789, button#zap-confirm123456789 { 
        background: #444;
        color:white;
        border:1px solid rgb(102, 102, 102);
        padding: 6px 12px;
        border-radius: 6px;
        font-family: inherit;
        font-size: 16px;
        transition: background 0.3s;
      }
      button#zap-start123456789:hover, button#zap-confirm123456789:hover {
        background:rgb(102, 102, 102); /*yes, i used rgb so there isnt 3 repeating 6's, so what?*/
      }
      input#zap-slider123456789 {
        width:100%;
        accent-color:red;
      }
    `;
    document.head.appendChild(style);
  
    const container = document.createElement('div');
    document.body.appendChild(container);
  
    const windows123456789 = []

    const createWindow = ({ content = "", url = null, title = "unnamed window", x = 50, y = 50, width = 400, height = 300, center = false } = {}) => {
      const win = document.createElement('div')
      const bar = document.createElement('div')
      const contentEl = document.createElement('div')
      const btns = document.createElement('div')
      const r = document.createElement('div')
      const yb = document.createElement('div')
      const g = document.createElement('div')
      const titleEl = document.createElement('span')
    
      win.className = 'window123456789'
      bar.className = 'window-bar123456789'
      contentEl.className = 'window-content123456789'
      btns.className = 'window-bar-buttons123456789'
      r.className = 'button123456789 red123456789'
      yb.className = 'button123456789 yellow123456789'
      g.className = 'button123456789 green123456789'
      titleEl.className = 'window-title123456789'
      titleEl.textContent = title
    
      btns.append(r, yb, g)
      bar.append(btns, titleEl)
      win.append(bar, contentEl)
    
      if (url) {
        const iframe = document.createElement('iframe')
        iframe.src = url
        iframe.style.width = '100%'
        iframe.style.height = '100%'
        iframe.style.border = 'none'
        iframe.style.pointerEvents = 'auto'
        contentEl.appendChild(iframe)
      } else {
        contentEl.innerHTML = content
      }
    
      if (center) {
        x = (window.innerWidth - width) / 2
        y = (window.innerHeight - height) / 2
      }
    
      win.style.left = `${x}px`
      win.style.top = `${y}px`
      win.style.width = `${width}px`
      win.style.height = `${height}px`
    
      let dragging = false, offsetX = 0, offsetY = 0
    
      bar.addEventListener('mousedown', e => {
        dragging = true
        offsetX = e.clientX - win.offsetLeft
        offsetY = e.clientY - win.offsetTop
      })
      document.addEventListener('mousemove', e => {
        if (!dragging) return
        win.style.left = `${e.clientX - offsetX}px`
        win.style.top = `${e.clientY - offsetY}px`
      })
      document.addEventListener('mouseup', () => dragging = false)
    
      g.onclick = () => {
        if (win.classList.contains('max123456789')) {
          win.style.width = `${width}px`
          win.style.height = `${height}px`
          win.style.left = `${x}px`
          win.style.top = `${y}px`
        } else {
          win.style.width = '100vw'
          win.style.height = '100vh'
          win.style.left = '0'
          win.style.top = '0'
        }
        win.classList.toggle('max123456789')
      }
    
      yb.onclick = () => {
        win.style.display = 'none'
        if (!window._shownHint123456789) {
          const msg = document.createElement('div')
          msg.className = 'barmsg123456789'
          msg.textContent = 'press ctrl + ~ to show windows'
          document.body.appendChild(msg)
          setTimeout(() => {
            msg.style.opacity = '0'
            setTimeout(() => msg.remove(), 500)
          }, 2000)
          window._shownHint123456789 = true
        }
      }
    
      r.onclick = () => win.remove()
    
      container.appendChild(win)
      windows123456789.push(win)
    }
    
    document.addEventListener('keyup', e => {
      if (e.ctrlKey && e.key === '`') {
        for (const w of windows123456789) {
          w.style.display = ''
        }
      }
    })
    //yes, weird, but it wouldnt work without it, and i think the hoisting made it not work with the onclick below? i dont know, but if it isnt broken dont fix it?
    window.elementZapper = function() {
        createWindow({ title: "element zapper", content: `
        <div id="zap-controls123456789" style="display:flex;flex-direction:column;gap:10px">
          <button id="zap-start123456789">select element</button>
          <input type="range" id="zap-slider123456789" min="0" value="0" step="1">
          <button id="zap-confirm123456789">zap!</button>
          <p id="plesBePatientBro">LOADING... PLEASE BE PATIENT.</p>
        </div>
      `, center: true, width: 300, height: 200 });
      setTimeout(prepareZapper,5000);
    }
    //make the windows
    createWindow({ content: `
        <div style="display:flex; flex-direction:column; align-items:center; gap:20px; margin-top:20px;">
        <h2 style ="color:white; font-size:24px;">Tool Menu</h2>
        <div style="border: 1px solid #444; border-radius: 20px; padding: 10px 50px;" align="center">
        <h3 style="color:white;">Site manipulation</h3>
        <button style="width:80%;padding:10px;border:none;border-radius:8px;background:#444;color:white;font-size:18px;font-family:inherit;transition:background 0.3s" onmouseover="this.style.background='#666'" onmouseout="this.style.background='#444'" onclick="elementZapper();">element zapper</button>
        </div>
        `, title: "tool menu", center: true, width: 500, height: 400 });

    //zapper things:

    function prepareZapper() {
        //i had to do this because it started tweaking if i ran this before making the window
        let zapTarget123456789 = null
        let zapPath123456789 = []
        
        let plesBePatient = document.getElementById("plesBePatientBro");
        plesBePatient.textContent="ready to start zappering!";
        const highlightBox123456789 = document.createElement('div')
        highlightBox123456789.style.position = 'absolute'
        highlightBox123456789.style.border = '2px solid red'
        highlightBox123456789.style.backgroundColor = 'rgba(255,0,0,0.2)'
        highlightBox123456789.style.pointerEvents = 'none'
        highlightBox123456789.style.zIndex = 999999
        highlightBox123456789.style.display = 'none'
        document.body.appendChild(highlightBox123456789)
        
        const getBounds = el => {
        const rect = el.getBoundingClientRect()
        highlightBox123456789.style.left = `${rect.left + window.scrollX}px`
        highlightBox123456789.style.top = `${rect.top + window.scrollY}px`
        highlightBox123456789.style.width = `${rect.width}px`
        highlightBox123456789.style.height = `${rect.height}px`
        highlightBox123456789.style.display = 'block'
        }
        
        const zapSlider = document.getElementById('zap-slider123456789')
        const startButton = document.getElementById('zap-start123456789')
        const zapButton = document.getElementById('zap-confirm123456789')
        
        let selecting = false
        
        startButton.onclick = () => {
        selecting = true
        document.body.style.cursor = 'crosshair'
        
        const hoverHandler = e => {
            if (!selecting) return
            if (e.target.id?.includes('123456789')) return
        
            zapTarget123456789 = e.target
            zapPath123456789 = []
            let current = zapTarget123456789
            while (current) {
            zapPath123456789.push(current)
            current = current.parentElement
            }
        
            zapSlider.max = zapPath123456789.length - 1
            zapSlider.value = 0
            getBounds(zapPath123456789[0])
            e.preventDefault()
            //this may or may not work
            e.stopPropagation()
        }
        
        const clickHandler = e => {
            if (!selecting) return
            e.preventDefault()
            e.stopPropagation()
            selecting = false
            document.body.style.cursor = ''
            document.removeEventListener('mousemove', hoverHandler, true)
            document.removeEventListener('click', clickHandler, true)
        }
        
        document.addEventListener('mousemove', hoverHandler, true)
        document.addEventListener('click', clickHandler, true)
        }
        
        zapSlider.oninput = () => {
        const selected = zapPath123456789[+zapSlider.value]
        if (selected) getBounds(selected)
        }
        
        zapButton.onclick = () => {
        const selected = zapPath123456789[+zapSlider.value]
        if (selected && selected.parentElement) {
            selected.parentElement.removeChild(selected)
            highlightBox123456789.style.display = 'none'
        }
        }
    }  
    

      
  })();
  
