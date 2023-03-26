const button = document.getElementById("button-id");
const loadingContainer = document.getElementById("loading");
const contentButton = document.getElementById("content-button");

let percent = 0;

button.addEventListener("click", () => {
	contentButton.textContent = "Estamos processando...";
	changeWidthBYTime(20);
});

const changeWidthBYTime = addPercent => {
	const interval = setInterval(() => {
		percent += addPercent;
		loadingContainer.style.width = `${percent}%`;
		if (percent > 100) {
			clearInterval(interval);
			loadingContainer.style.opacity = 0;
			loadingContainer.style.width = "0%";
			button.style.animationDuration = "2s";
			button.style.animationName = "transformButton";
			button.style.animationFillMode = "forwards";
			contentButton.textContent = "";

			setTimeout(() => {
				contentButton.textContent = "✔";
			}, 1600);
		}
	}, 800);
};
