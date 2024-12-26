#!/bin/bash

# purpose : be called after compilation and place file at good place

# for simple html example
mv src/websockets-doom.* out/

# for nextjs example
mkdir -p out/doom-captcha/public/doom-wasm
cp out/websockets-doom.js out/doom-captcha/public
cp out/websockets-doom.wasm out/doom-captcha/public
cp out/websockets-doom.data out/doom-captcha/public
cp out/websockets-doom.wasm.map out/doom-captcha/public
