<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Read-Write Accessor

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Define][@stdlib/utils/define-property] a **read-write** accessor.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-define-read-write-accessor
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
var setReadWriteAccessor = require( '@stdlib/utils-define-read-write-accessor' );
```

#### setReadWriteAccessor( obj, prop, getter, setter )

[Defines][@stdlib/utils/define-property] a **read-write** accessor.

```javascript
var word = 'bar';
var obj = {};

function getter() {
    return word + ' foo';
}

function setter( v ) {
    word = v;
}

setReadWriteAccessor( obj, 'foo', getter, setter );

var v = obj.foo;
// returns 'bar foo'

obj.foo = 'beep';

v = obj.foo;
// returns 'beep foo'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Read-write accessors are **enumerable** and **non-configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var setReadWriteAccessor = require( '@stdlib/utils-define-read-write-accessor' );

function Foo( name ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( name );
    }
    setReadWriteAccessor( this, 'name', getName, setName );
    return this;

    function getName() {
        return 'Hello, ' + name;
    }

    function setName( v ) {
        name = v;
    }
}

var foo = new Foo( 'Grace' );
console.log( foo.name );

foo.name = 'Ada';
console.log( foo.name );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-define-read-only-property`][@stdlib/utils/define-read-only-property]</span><span class="delimiter">: </span><span class="description">define a read-only property.</span>
-   <span class="package-name">[`@stdlib/utils-define-read-only-accessor`][@stdlib/utils/define-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a read-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils-define-write-only-accessor`][@stdlib/utils/define-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a write-only accessor.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-define-read-write-accessor.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-define-read-write-accessor

[test-image]: https://github.com/stdlib-js/utils-define-read-write-accessor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-define-read-write-accessor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-define-read-write-accessor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-define-read-write-accessor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-define-read-write-accessor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-define-read-write-accessor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-define-read-write-accessor/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-define-read-write-accessor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-define-read-write-accessor/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-define-read-write-accessor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-define-read-write-accessor/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-define-read-write-accessor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-define-read-write-accessor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-define-read-write-accessor/main/LICENSE

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils-define-property

<!-- <related-links> -->

[@stdlib/utils/define-read-only-property]: https://github.com/stdlib-js/utils-define-read-only-property

[@stdlib/utils/define-read-only-accessor]: https://github.com/stdlib-js/utils-define-read-only-accessor

[@stdlib/utils/define-write-only-accessor]: https://github.com/stdlib-js/utils-define-write-only-accessor

<!-- </related-links> -->

</section>

<!-- /.links -->
