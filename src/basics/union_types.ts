// The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types.
let id_user: number | string;

id_user = 101;
console.log(`ID numérico: ${id_user}`);

id_user = "abc106";
console.log(`ID alfanumérico: ${id_user}`);

