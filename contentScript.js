console.log('Hello Content');

const text = [];

const aTags = document.getElementsByTagName("a");
for (const tag of aTags) {
    if (tag.textContent.includes("i")) {
        text.push(tag.textContent);
        // tag.style = "background-color: palegreen;";
    }
    // tag.textContent = 'Test';

    chrome.storage.local.set({
        text
    });
}

chrome.runtime.sendMessage(null, text);