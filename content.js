let isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
let keysPressed = {};

document.addEventListener('keydown', (event) => {
	if (isMac) {
		keysPressed[event.key] = true;

		if (keysPressed['Meta'] && keysPressed['Shift'] && event.key === 'B') {
			modifyClipboard();
			keysPressed = {}; // reset keysPressed after the sequence is detected
		}
	} else {
		keysPressed[event.key] = true;

		if (keysPressed['Control'] && keysPressed['Shift'] && event.key === 'B') {
			modifyClipboard();
			keysPressed = {}; // reset keysPressed after the sequence is detected
		}
	}
});

document.addEventListener('keyup', (event) => {
	delete keysPressed[event.key];
});

async function modifyClipboard() {
	try {
		const text = await navigator.clipboard.readText();
		const modifiedText = text.replace(/\n/g, ', ');
		await navigator.clipboard.writeText(modifiedText);
		console.log("Clipboard content modified.");
	} catch (error) {
		console.error("Failed to modify clipboard content: ", error);
	}
}

