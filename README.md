# go-wasm
- main.wasm is built from [go-js](https://github.com/mbmcmullen27/go-js)
- wasm_exec.js is required to run wasm compiled from go
- copy it from your local go install 
```sh
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" ./
```