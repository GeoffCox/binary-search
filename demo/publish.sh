#run
run() {
    npm run build
    echo built
    cp -R ./.svelte-kit/output/. ../../geoffcox.github.io/demos/binary-search
    echo copied
}

run