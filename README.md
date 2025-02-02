# TypeScript Function Parameter Default Value Ambiguity

This repository demonstrates a subtle issue in TypeScript where a function parameter with a type annotation and a default value of `undefined` doesn't differentiate between an explicitly passed `undefined` and an omitted parameter.  Both result in `undefined` being logged.

## Problem

The `printName` function in `bug.ts` is designed to print a name, but if no name is passed, it should ideally do something else, such as printing a default message. However, whether the caller passes `undefined` or omits the argument, the output is identical.