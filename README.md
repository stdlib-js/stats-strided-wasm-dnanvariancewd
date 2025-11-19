<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dnanvariancewd

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [variance][variance] of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-strided-wasm-dnanvariancewd
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var dnanvariancewd = require( '@stdlib/stats-strided-wasm-dnanvariancewd' );
```

#### dnanvariancewd.main( N, correction, x, strideX )

Computes the [variance][variance] of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanvariancewd.main( x.length, 1, x, 1 );
// returns ~4.3333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [variance][variance] according to `n-c` where `c` corresponds to the provided degrees of freedom adjustment and `n` corresponds to the number of non-`NaN` indexed elements. When computing the [variance][variance] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the unbiased sample [variance][variance], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to access every other element in `x`,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ] );

var v = dnanvariancewd.main( 5, 1, x, 2 );
// returns 6.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dnanvariancewd.main( 5, 1, x1, 2 );
// returns 6.25
```

#### dnanvariancewd.ndarray( N, correction, x, strideX, offsetX )

Computes the [variance][variance] of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanvariancewd.ndarray( x.length, 1, x, 1, 0 );
// returns ~4.3333
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access every other element starting from the second element:

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );

var v = dnanvariancewd.ndarray( 5, 1, x, 2, 1 );
// returns 6.25
```

* * *

### Module

#### dnanvariancewd.Module( memory )

Returns a new WebAssembly [module wrapper][@stdlib/wasm/module-wrapper] instance which uses the provided WebAssembly [memory][@stdlib/wasm/memory] instance as its underlying memory.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a new routine:
var mod = new dnanvariancewd.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### dnanvariancewd.Module.prototype.main( N, correction, xp, sx )

Computes the [variance][variance] of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );
var oneTo = require( '@stdlib/array-one-to' );
var zeros = require( '@stdlib/array-zeros' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a new routine:
var mod = new dnanvariancewd.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'float64';

// Specify a vector length:
var N = 3;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );

// Perform computation:
var v = mod.main( N, 1, xptr, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment.
-   **xp**: input [`Float64Array`][@stdlib/array/float64] pointer (i.e., byte offset).
-   **sx**: stride length for `x`.

#### dnanvariancewd.Module.prototype.ndarray( N, correction, xp, sx, ox )

Computes the [variance][variance] of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm and alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );
var oneTo = require( '@stdlib/array-one-to' );
var zeros = require( '@stdlib/array-zeros' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a new routine:
var mod = new dnanvariancewd.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'float64';

// Specify a vector length:
var N = 3;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );

// Perform computation:
var v = mod.ndarray( N, 1, xptr, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both `main` and `ndarray` methods return `NaN`.
-   If `n - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment and `n` corresponds to the number of non-`NaN` indexed elements), both `main` and `ndarray` methods return `NaN`.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `dnanvariancewd` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/stats-strided/dnanvariancewd`][@stdlib/stats/strided/dnanvariancewd]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/stats/strided/dnanvariancewd`][@stdlib/stats/strided/dnanvariancewd]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var bernoulli = require( '@stdlib/random-base-bernoulli' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var dnanvariancewd = require( '@stdlib/stats-strided-wasm-dnanvariancewd' );

function rand() {
    if ( bernoulli( 0.2 ) > 0 ) {
        return NaN;
    }
    return discreteUniform( 0, 10 );
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var v = dnanvariancewd.ndarray( x.length, 1, x, 1, 0 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided-wasm-dnanvariancewd.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided-wasm-dnanvariancewd

[test-image]: https://github.com/stdlib-js/stats-strided-wasm-dnanvariancewd/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-strided-wasm-dnanvariancewd/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-strided-wasm-dnanvariancewd/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-strided-wasm-dnanvariancewd?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-strided-wasm-dnanvariancewd.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-strided-wasm-dnanvariancewd/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-strided-wasm-dnanvariancewd/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-strided-wasm-dnanvariancewd/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-strided-wasm-dnanvariancewd/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-strided-wasm-dnanvariancewd/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-strided-wasm-dnanvariancewd/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-strided-wasm-dnanvariancewd/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-strided-wasm-dnanvariancewd/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-strided-wasm-dnanvariancewd/main/LICENSE

[variance]: https://en.wikipedia.org/wiki/Variance

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/stats/strided/dnanvariancewd]: https://github.com/stdlib-js/stats-strided-dnanvariancewd

</section>

<!-- /.links -->
