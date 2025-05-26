const args = process.argv.slice(2);

if (!Number(args[0])){
    console.log("Missing size");
}
else{
    for (let i = 0; i < args[0]; i++){
        console.log('X'.repeat(args[0]));
    }
}


// The code block below is a second option
// 
// if (!Number(args[0])){
//     console.log("Missing size");
// }
// else{
//     for(let i = 0; i < args[0]; i++){
//         let row = '';
//         for (let j = 0; j < args[0]; j++){ 
//             row += 'x'
//         }
//         console.log(row)
//     }
// }