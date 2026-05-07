# Title: Why is `any` labeled a "type safety hole"?

`any` is Type Safely Hole.

If we use `any`, TypeScript does not check type. It breaks safety.

```ts
let value: any = "Piash";

value.toFixed(); // no error in compiled time

Title: Type Narrowing
Type narrowing is the process a variable from a broad type to convert more specific type.

let value: unknown = "Piash";

value.toFixed(); // It will give error

There are some process of narrowing.
1.typeof narrowing
2. instanceof narrowing
3.equality narrowing

