// Con var
var nombr // declaración (undefined) ✅
nombr = "Andres" // asignación ✅
nombr = "Valeria" // reasignación ✅
var nombr = "Oscar" // redeclaración y reasignación ✅

// Con let
let nombres; // declaración (undefined) ✅
nombres = "Andres" // asignación ✅
nombres = "Valeria" // reasignación ✅
//let nombres = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Con const 
//const nombre; // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres" // declaración y asignación ✅
//nombre = "Valeria" // TypeError: Assignment to constant variable. ❌
//const nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌