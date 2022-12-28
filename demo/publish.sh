#run
run() {
    npm run build
    echo built
    cp -R ./build/. ../../geoffcox.github.io/demos/binary-search
    echo copied
}

run