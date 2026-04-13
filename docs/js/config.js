const CONFIG = {
  dataFile: "../js/data.js"  // swap filename to change deck
};

// Inject data file synchronously via document.write — only reliable method on file://
document.write('<script src="' + CONFIG.dataFile + '"><\/script>');