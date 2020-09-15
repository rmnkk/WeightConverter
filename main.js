// Variant with 4 unit blocks
// document.getElementById('output').style.visibility = 'hidden'
//
//
// document.getElementById('Inputer').addEventListener('input', (e) => {
//         document.getElementById('output').style.visibility = 'visible'
//         let lbs = e.target.value;
//         if (document.getElementById('Inputer').placeholder === 'Enter Pounds...') {
//             document.getElementById('lbsOutput').innerHTML = '----';
//             document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
//             document.getElementById('kgOutput').innerHTML = lbs/2.2046;
//             document.getElementById('ozOutput').innerHTML = lbs*16
//         }
//     })
//
//
//
// document.getElementById('sel1').addEventListener('change', (e) => {
//     document.getElementById('Inputer').placeholder = `Enter ${e.target.value}...`
//     let unit = e.target.value;
//
//
//         if (unit === 'Kilograms') {
//             document.getElementById('Inputer').addEventListener('input',(e) => {
//                 let inp = e.target.value
//
//                 document.getElementById('gramsOutput').innerHTML = inp * 1000;
//                 document.getElementById('lbsOutput').innerHTML = inp * 2.2046
//                 document.getElementById('ozOutput').innerHTML = inp * 35.274
//                 document.getElementById('kgOutput').innerHTML = '----'
//             })
//         }
//
//         if (unit === 'Grams') {
//             document.getElementById('Inputer').addEventListener('input', (e) => {
//                 let inp = e.target.value
//
//                 document.getElementById('gramsOutput').innerHTML = '----';
//                 document.getElementById('lbsOutput').innerHTML = inp / 453.59237
//                 document.getElementById('ozOutput').innerHTML = inp * 0.035274
//                 document.getElementById('kgOutput').innerHTML = inp /1000
//             })
//         }
//
// })
//
// document.getElementById('Inputer').addEventListener('input', (e) => {
//     let inp = e.target.value
//
//     document.getElementById('sel1').addEventListener('change', (e) => {
//         if (e.target.value === 'Kilograms') {
//             document.getElementById('gramsOutput').innerHTML = inp * 1000;
//             document.getElementById('lbsOutput').innerHTML = inp * 2.2046
//             document.getElementById('ozOutput').innerHTML = inp * 35.274
//             document.getElementById('kgOutput').innerHTML = '----'
//         }
//
//         if (e.target.value === 'Grams') {
//             document.getElementById('gramsOutput').innerHTML = '----';
//             document.getElementById('lbsOutput').innerHTML = inp / 453.59237
//             document.getElementById('ozOutput').innerHTML = inp * 0.035274
//             document.getElementById('kgOutput').innerHTML = inp /1000
//         }
//
//         if (e.target.value === 'Pounds') {
//             document.getElementById('lbsOutput').innerHTML = '----';
//             document.getElementById('gramsOutput').innerHTML = inp/0.0022046;
//             document.getElementById('kgOutput').innerHTML = inp/2.2046;
//             document.getElementById('ozOutput').innerHTML = inp*16
//         }
//     })
// })




// Variant with three unit blocks

// Hide divs at the start
document.getElementById('pounds').style.display = 'none'
document.getElementById('kgs').style.display = 'none'
document.getElementById('gramz').style.display = 'none'
document.getElementById('ozs').style.display = 'none'



// On select change defines new placeholder value and changes which div to show and which to hide
document.getElementById('sel1').addEventListener('change', (e) =>{
    let variant = e.target.value
    if (variant === 'Kilograms') {
        document.getElementById('Inputer').placeholder = 'Enter Kilograms...'
        document.getElementById('kgs').style.display = 'block'
        document.getElementById('pounds').style.display = 'none'
        document.getElementById('gramz').style.display = 'none'
        document.getElementById('ozs').style.display = 'none'

//makes calculations with input value after select change depending on the option
        document.getElementById('Inputer').addEventListener('input',(e) => {
                let inp = e.target.value

                document.getElementById('grams1Output').innerHTML = (inp * 1000).toFixed(2);
                document.getElementById('lbsOutput').innerHTML = (inp * 2.2046).toFixed(2)
                document.getElementById('oz1Output').innerHTML = (inp * 35.274).toFixed(2)
        })
    } else if (variant === 'Grams') {
        document.getElementById('Inputer').placeholder = 'Enter Grams...'
        document.getElementById('gramz').style.display = 'block'
        document.getElementById('pounds').style.display = 'none'
        document.getElementById('kgs').style.display = 'none'
        document.getElementById('ozs').style.display = 'none'

        document.getElementById('Inputer').addEventListener('input', (e) => {
                let inp = e.target.value

                document.getElementById('lbs2Output').innerHTML = (inp / 453.59237).toFixed(2)
                document.getElementById('oz2Output').innerHTML = (inp * 0.035274).toFixed(2)
                document.getElementById('kg2Output').innerHTML = (inp /1000).toFixed(2)
            })
    } else if (variant === 'Pounds') {
        document.getElementById('Inputer').placeholder = 'Enter Pounds...'
        document.getElementById('pounds').style.display = 'block'
        document.getElementById('kgs').style.display = 'none'
        document.getElementById('gramz').style.display = 'none'
        document.getElementById('ozs').style.display = 'none'


    } else if (variant === 'Ounces') {
        document.getElementById('Inputer').placeholder = 'Enter Ounces...'
        document.getElementById('ozs').style.display = 'block'
        document.getElementById('pounds').style.display = 'none'
        document.getElementById('kgs').style.display = 'none'
        document.getElementById('gramz').style.display = 'none'

        document.getElementById('Inputer').addEventListener('input', (e) => {
            let inp = e.target.value

            document.getElementById('lbs3Output').innerHTML = (inp/16).toFixed(2)
            document.getElementById('kg3Output').innerHTML = (inp /  35.274).toFixed(2)
            document.getElementById('grams2Output').innerHTML = (inp / 28.35).toFixed(2)
        })

    }
})



// makes calculations with input value  possible after given input
document.getElementById('Inputer').addEventListener('input', (e) => {
    let inp = e.target.value

    // Makes possible to do calculations with Pounds after the page is load
    if (document.getElementById('Inputer').placeholder === 'Enter Pounds...') {
        document.getElementById('pounds').style.display = 'block'
        document.getElementById('gramsOutput').innerHTML = (inp/0.0022046).toFixed(2);
        document.getElementById('kgOutput').innerHTML = (inp/2.2046).toFixed(2);
        document.getElementById('ozOutput').innerHTML = (inp*16).toFixed(2);
    }


    document.getElementById('sel1').addEventListener('change', (e) => {
        if (e.target.value === 'Kilograms') {
            document.getElementById('grams1Output').innerHTML = (inp * 1000).toFixed(2);
            document.getElementById('lbsOutput').innerHTML = (inp * 2.2046).toFixed(2);
            document.getElementById('oz1Output').innerHTML = (inp * 35.274).toFixed(2);
        }

        if (e.target.value === 'Grams') {
            document.getElementById('lbs2Output').innerHTML = (inp / 453.59237).toFixed(2);
            document.getElementById('oz2Output').innerHTML = (inp * 0.035274).toFixed(2);
            document.getElementById('kg2Output').innerHTML = (inp /1000).toFixed(2);
        }

        if (e.target.value === 'Pounds') {
            document.getElementById('gramsOutput').innerHTML = (inp/0.0022046).toFixed(2);
            document.getElementById('kgOutput').innerHTML = (inp/2.2046).toFixed(2);
            document.getElementById('ozOutput').innerHTML = (inp*16).toFixed(2);
        }

        if (e.target.value === 'Ounces') {
            document.getElementById('lbs3Output').innerHTML = (inp/16).toFixed(2)
            document.getElementById('kg3Output').innerHTML = (inp /  35.274).toFixed(2)
            document.getElementById('grams2Output').innerHTML = (inp / 28.35).toFixed(2)
        }
    })
});





