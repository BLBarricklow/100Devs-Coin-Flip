document.querySelector('#coin').addEventListener('click', makeReq);

async function makeReq() {
    const res = await fetch('/api');
    const data = await res.json();

    document.querySelector('#call').textContent = data.result;
    document.querySelector('#coin').src = data.image;
}