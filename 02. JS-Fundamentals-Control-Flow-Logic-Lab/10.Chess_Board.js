function chessBoard(n) {

    let color = "black";

    console.log("<div class=\"chessboard\">");

    for (let i = 1; i <= n; i++) {

        console.log("  <div>");

        for (var j = 1; j <= n; j++) {

            if (i % 2 !== 0 && j % 2 !== 0) {
                color = "black";
            }
            else if (i % 2 !== 0 && j % 2 === 0) {
                color = "white";
            }
            else if (i % 2 === 0 && j % 2 !== 0) {
                color = "white";
            }
            else  {
                color = "black";
            }

            console.log(`    <span class="${color}"></span>`);
        }
        console.log("  </div>");
    }
    console.log("</div>");
}


chessBoard(4);