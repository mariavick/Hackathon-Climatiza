// Select button
let buttons = document.querySelectorAll(".read_button"); // Adicione a class ".read_button" nos buttons

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        // Select card
        let card = button.parentElement; //o parend element vai pegar quem é o elemento pai do botão, ou seja, o card

        // Add/Remove Class Active
        card.classList.toggle("active");

        if (card.classList.contains("active")) {
            // Change button text if has class active
            return (button.textContent = "Ler menos");
        }

        // Change button text if hasn't class active
        button.textContent = "Ler mais";
    });
});
