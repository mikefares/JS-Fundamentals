const args = process.argv.slice(2);

if (!Number(args[0])){
    console.log("Not a number")
}
else{
    console.log(`My number: ${args[0]}`)
}

