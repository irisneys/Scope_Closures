
function fruits(){
    if (true) {
        var fruit1 = 'apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);
    //console.log(fruit2);
    //console.log(fruit3);
    
}

fruits ();

/*fruit1= al estar declarada con var tiene scope de función, por ende puede ser accedida desde cualquier parte de la función fruits, luego, imprimirá Apple por consola.
fruit2 y fruit3 = están declaradas con let y const respectivamente, por ende tienen scope de bloque, en otras palabras solo pueden ser accedidas desde el cuerpo del if y no así desde toda la función fruits. */