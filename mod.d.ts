/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { PropertyName } from '@stdlib/types/object';

/**
* Getter function.
*
* @returns property value
*/
type Getter = () => any;

/**
* Setter function.
*
* @param value - property value
*/
type Setter = ( x: any ) => void;

/**
* Defines a read-write accessor.
*
* ## Notes
*
* -   Read-write accessors are enumerable and non-configurable.
*
* @param obj - object on which to define the property
* @param prop - property name
* @param getter - get accessor
* @param setter - set accessor
*
* @example
* function getter() {
*     return name + ' foo';
* }
*
* function setter( v ) {
*     name = v;
* }
*
* var name = 'bar';
* var obj = {};
*
* setReadWriteAccessor( obj, 'foo', getter, setter );
*
* var v = obj.foo;
* // returns 'bar foo'
*
* obj.foo = 'beep';
*
* v = obj.foo;
* // returns 'beep foo'
*/
declare function setReadWriteAccessor( obj: any, prop: PropertyName, getter: Getter, setter: Setter ): void; // tslint:disable-line: max-line-length


// EXPORTS //

export = setReadWriteAccessor;