Trying to get karma-typescript working with coverage
====================================================

In this setup I have some typescript code in the `src` directory,
which is compiled into `build/js` using a separate process, rather
than having karma-typescript compile it. The declarations are
generated into the `build\declarations` directory. (This is a test 
setup — the real setup is more complex, but it ends up the same —
having the `.js` and `.js.map` files available in one directory.)

The tests are also written in typescript, and sit in the `test`
directory. They use the declarations which were generated from the
typescript source.

Karma is configured to use karma-typescript, so that the tests
are compiled on the fly, but include the built js files so that
the tests will run correctly.

However, it seems that karma-typescript can't cope with the
source maps for the compiled files as it hasn't compiled them
itself, so when it tries to find the file in sharedProcessedFiles
it can't find them.