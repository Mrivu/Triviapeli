const CATEGORIES = [
    { id: "maantieto", name: "Maantieto" },
    { id: "yleistieto", name: "Yleistieto" },
    { id: "historia", name: "Histora" },
    { id: "taide ja kulttuuri", name: "Taide ja Kulttuuri" },
    { id: "tiede", name: "Tiede" },
    { id: "urheilu", name: "Urheilu" }
];

const BOARD_SIZE = 18;
const boardElement = document.querySelector("#board");

function CreateBoardCoodrinates() {
    const coordinates = [];

    for (let column = 1; column <= 7; column += 1) {
        coordinates.push( { row: 1, column } )
    }



    return coordinates;
}