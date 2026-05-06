Title: Why is any labeled a "type safety hole?
any is Type Safely Hole
If we use any typescript does not check type. It breaks Safety.

let value:any="Piash"
value.toFixed() // no error in compiled time

Title: why is unknown the safer choice for handling unpredictable data?

unknown is safer for unpredictable data because it forces to check the type before using.

let value: unknown = "Piash";

data.toFixed(); // It will give error

Title: Type Narrowing
Type narrowing is the process a variable from a broad type to convert more specific type.

There are some process of narrowing.
1.typeof narrowing
2. instanceof narroing
3.equality narrowing

