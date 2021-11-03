import {Exchanger} from "./Exchanger";

initEventListener();

function initEventListener() {

    const btn: HTMLElement | null = document.querySelector("#exchange")
    const resultText: HTMLElement | null = document.querySelector("#result")

    const getInputNumberValue = (id: string): number => {
        const element: HTMLElement | null = document.querySelector("#" + id);

        if (element != null && element instanceof HTMLInputElement) {
            return element.valueAsNumber;
        } else {
            throw new Error(`HTML element is null or wrong type`);
        }
    }

    if (btn !== null) {
        if (btn instanceof HTMLButtonElement) {
            btn.addEventListener<"click">("click", (event: MouseEvent) => {
                event.preventDefault();
                event.stopPropagation();
                const ex: Exchanger = new Exchanger(
                    getInputNumberValue("gold"),
                    getInputNumberValue("silver"),
                    getInputNumberValue("copper")
                );
                if (resultText !== null) {
                    resultText.innerText = `Wynik: ${ex.calculateToCopper()}`;
                }
            });
        } else {
            throw new Error(`HTML element for exchange is not a button`);
        }
    } else {
        throw new Error(`Button for exchange not found`);
    }
}