
const tunes = ["a","s","d","f","g","h","j","k","l","m","n","o"];


document.body.addEventListener("keydown", function (info) {

    let key = info.key;

    let flag=tunes.includes(key);
   
    if (flag) {
      let btn = document.querySelector(`.${key}`);
        btn.style.transform = "rotateX(-15deg)";

        setTimeout(() => {
            btn.style.transform = "rotateX(0deg)";
        }, 150);
         let song = new Audio(`tunes/${key}.mp3`);
         song.play();
    }
    else {
        let num = Math.floor(Math.random() * 6);
        let btn = document.querySelectorAll(".black");
        btn[num].style.transform = "rotateX(-15deg)";
        setTimeout(() => {
            btn[num].style.transform = "rotateX(0deg)";
        }, 150);
        let song = new Audio(`tunes/z.mp3`);
         song.play();

    }

   
});
