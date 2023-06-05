chrome.storage.local.get(['shows'], (res) => {
    for (const show of res.shows) {
        console.log('test')
        renderShow(show);
    }
});

function renderShow(data) {
    const showDiv = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = data?.show?.name;

    const image = document.createElement('img');
    image.src = data?.show?.image?.medium;

    showDiv.appendChild(title);
    showDiv.appendChild(image);
    document.body.appendChild(showDiv);
}