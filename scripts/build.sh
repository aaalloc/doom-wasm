#!/bin/bash

cd "`dirname \"$0\"`/.."

emsdk install 3.1.61
emsdk activate 3.1.61

emmake make clean
emconfigure autoreconf -fiv
ac_cv_exeext=".html" emconfigure ./configure --host=none-none-none

emmake make

# execute deploy.sh which is presnet in the same directory
./scripts/deploy.sh