const container = document.getElementById('container');
const img = document.querySelectorAll("#img");

let idx = 0;

const carousel = () => {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }
    container.style.transform = `translateX(${-idx * 500}px)`;
}
setInterval(carousel, 2000);


