self.addEventListener('message', (event) => {
    self.postMessage(`Thank you. You Said: ${event.data}`);
    // self.close();
}, false)