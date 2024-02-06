window.addEventListener("DOMContentLoaded", e => {
    const buttons = document.querySelectorAll(".buttons");
    buttons.forEach(b => {
        b.addEventListener("click", e => {
            const button = e.target
            console.log(`clicked ${button.id}`);
            if(button.id == "N2N"){
                fetch("http://localhost:3333/N2N")
                    .then(response => console.log(response));
            } else if (button.id == "12N") {

            } else if (button.id == "121") {

            } else if(button.id == "DN2N") {
                fetch(
                    "http://localhost:3333/N2N", 
                    {method: 'DELETE'}
                )
                .then(response => console.log(response))
            } 
            
            else {
                console.log(`Button ${button.id} not recognized`);
            }
        });
    });
})