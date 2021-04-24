const fs = require('fs');
require('./wasm_exec.js');

  
(async () => {
    const go = new Go();
    // global().set("kubeconfig", js.String(fs.readFileSync('/home/fishbot/.kube/config')))

    const mod = await WebAssembly.compile(fs.readFileSync('./main.wasm')) 
    let inst = await WebAssembly.instantiate(mod, go.importObject)
    await go.run(inst)
    //inst = await WebAssembly.instantiate(mod, go.importObject); //I guess it consumes the whole instance?
})()
