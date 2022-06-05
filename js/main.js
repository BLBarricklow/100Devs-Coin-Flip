document.querySelector('#coin').addEventListener('click', makeReq);
//found explained on https://www.pentarem.com/blog/how-to-use-settimeout-with-async-await-in-javascript/
// use await to allow gif to play long enough to be seen.
function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}


async function makeReq() {
    document.querySelector('#coin-img').src = "assets/coinflip.gif";
    document.querySelector('#call').textContent = "";
    await delay(1000);
    const res = await fetch('/api');
    const data = await res.json();

    document.querySelector('#call').textContent = data.result;
    document.querySelector('#coin-img').src = data.image;
    setTimeout(() => console.log("Delay 10ms"), "10")
}