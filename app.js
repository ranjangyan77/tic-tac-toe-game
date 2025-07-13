let boxes = document.querySelectorAll(".box");
    let resetBtn = document.querySelector("#reset");
    let newGameBtn = document.querySelector("#new");
    let msg = document.querySelector(".msg");
    let me = document.querySelector("#me");

    let turn = true;

    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        if (turn) {
          box.innerText = "O";
          turn = false
        } else {
          box.innerText = "X";
          turn = true ;
        }
        box.disabled = true;

        checkWinner();
      });
    });

    const showWinner = (winner) => {
      me.innerText = `🎉 Congratulations! Winner is ${winner}`;
      msg.classList.remove("hide");
      disableBoxes();
    };

    const disableBoxes = () => {
      boxes.forEach((box) => {
        box.disabled = true;
      });
    };

    const enableBoxes = () => {
      boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
      });
      msg.classList.add("hide");
    };

    const checkWinner = () => {
      for (let pattern of win) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
          showWinner(pos1);
          return;
        }
      }
    };

    resetBtn.addEventListener("click", () => {
      turn = true;
      enableBoxes();
    });

    newGameBtn.addEventListener("click", () => {
      turn = true;
      enableBoxes();
    });