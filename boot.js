const fs = require('fs');
require('./wasm_exec.js');

global.kubeconfig = fs.readFileSync('/home/fishbot/.kube/config');
  
(async () => {
    const go = new Go();

    const mod = await WebAssembly.compile(fs.readFileSync('./main.wasm')) 
    let inst = await WebAssembly.instantiate(mod, go.importObject)
    await go.run(inst)
    // getPods()
    //inst = await WebAssembly.instantiate(mod, go.importObject); //I guess it consumes the whole instance?
})()
