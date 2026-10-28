console.log("[PoC] Import map override executed!");
document.body.insertAdjacentHTML('afterbegin',
  '<div style="position:fixed;top:0;left:0;width:100%;background:red;color:white;padding:10px;z-index:9999;font-weight:bold;">⚠️ MODULE OVERRIDDEN — PoC</div>'
);
