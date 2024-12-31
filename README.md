# Wasm Doom

Doom WASM for la nuit de l'info


## Modification
Check [commit](https://github.com/aaalloc/doom-wasm/commit/93532c0dc86f9b88388f125a4a4d915a83fc3289) for changes

## Compiling first time
Install [emscripten](https://emscripten.org/docs/getting_started/downloads.html)

Download [doom2.wad](https://github.com/Akbar30Bill/DOOM_wads/raw/refs/heads/master/doom2.wad)
Change path into `configure.ac` for your doom2.wad and default.cfg (default.cfg should be already present in `data/`)

```
...
    -s TOTAL_MEMORY=64MB \
    -s ERROR_ON_UNDEFINED_SYMBOLS=0 \
    -s EXPORT_ES6=1 \
    -sASSERTIONS \
    --preload-file /home/yanovskyy/Documents/projects/doom-wasm/data/doom2.wad@doom2.wad \
    --preload-file /home/yanovskyy/Documents/projects/doom-wasm/data/default.cfg@default.cfg \
    -s ASYNCIFY -O3 --source-map-base /"
...
```

```
./scripts/build.sh
```

## Recompiling
```
./scripts/buildv2.sh
``` 

## Usage
### Simple http server
```
cd out/
python -m http.server
```
### NextJS example
Example with NextJS and bun is present in `out/doom-captcha/`


## Acknowledgements
Fork repo

## License

Chocolate Doom and this port are distributed under the GNU GPL. See the COPYING file for more information.

[1]: https://github.com/chocolate-doom/chocolate-doom
[2]: https://emscripten.org/
[3]: https://doomwiki.org/wiki/DOOM1.WAD
[4]: src/net_websockets.c
[5]: https://silentspacemarine.com
[6]: src/index.html
[7]: https://blog.cloudflare.com/doom-multiplayer-workers
[8]: https://github.com/cloudflare/doom-workers
[9]: src
