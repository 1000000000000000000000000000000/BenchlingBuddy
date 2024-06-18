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

modifyClipboard();
