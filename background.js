chrome.commands.onCommand.addListener((command) => {
	if (command === "modify-clipboard") {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			if (tabs[0].id) {
				chrome.scripting.executeScript({
					target: { tabId: tabs[0].id },
					files: ['content.js']
				});
			}
		});
	}
});