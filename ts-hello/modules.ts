
// ******* MODULES
// import { object } from 'file location';

import { FarPoint } from './farPoint_module';

let modulePoint = new FarPoint(1,2);
modulePoint.draw();

/* What Are Typescript Modules?

The goal of modular code is that each individual module 
provides a piece of functionality, exposed through a 
well-defined interface. The internal details of how a 
module works are isolated, making it easier to test and refactor.

Modules can make use of other modules by importing them. 
In turn, a module exports only what it wants other code 
to be able to use.

In Typescript, a module is simply a file that imports or 
exports something.

source: https://www.pluralsight.com/guides/typescript-angular-understanding-modules

*/