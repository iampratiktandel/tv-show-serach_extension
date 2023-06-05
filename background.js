chrome.runtime.onInstalled.addListener((details) => {
    chrome.storage.local.set({
        shows: []
    });

    chrome.contextMenus.create({
        title: 'Search TV Show',
        id: 'contextMenu1',
        contexts: ['page', 'selection']
    });
    chrome.contextMenus.create({
        title: 'Read Text',
        id: 'contextMenu2',
        contexts: ['page', 'selection']
    });
    chrome.contextMenus.onClicked.addListener((event) => {
        // chrome.search.query({
        //     disposition: "NEW_TAB",
        //     text: `imdb ${event.selectionText}`
        // });

        // chrome.tabs.query({
        //     currentWindow: true
        // }, (tabs) => {
        //     console.log(tabs);
        // });

        // chrome.tabs.create({
        //     // url: `https://dev.azure.com/1RivetUSInc/Frontend?q=${event.selectionText}&ref=nv_sr_sm`
        //     url: `https://dev.azure.com/1RivetUSInc/Frontend`
        // });

        if (event.menuItemId === 'contextMenu1') {
            fetch(`http://api.tvmaze.com/search/shows?q=${event.selectionText}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    chrome.storage.local.set({
                        shows: data
                    })
                });
        } else if (event.menuItemId === 'contextMenu2') {
            chrome.tts.speak(event.selectionText);
        }
    });
});

// chrome.storage.local.get(['text'], (res) => {
//     // console.log(res);
// });

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//     console.log(msg, sender, sendResponse);
//     sendResponse('recieved message from background');
//     chrome.tabs.sendMessage(sender.tab.id, 'recieved message from background');
// });
