const t = localStorage.getItem('theme');
if (t != 'light' && t != 'dark')
	localStorage.setItem('theme', 'dark');
setTheme(false);

function setTheme(loaded) {
	localStorage.getItem('theme') == 'light' ? setLight(loaded) : setDark(loaded);

}

function setLight(loaded) {
	document.documentElement.style.setProperty('--primary-color', '#ffffff');
	document.documentElement.style.setProperty('--secondary-color', '#1b1b1b');
	document.documentElement.style.setProperty('--light-color', '#e6e6e6');

	if (loaded)
		document.getElementById("change-theme").innerHTML = '(dark)';
}

function setDark(loaded) {
	document.documentElement.style.setProperty('--primary-color', '#1b1b1b');
	document.documentElement.style.setProperty('--secondary-color', '#ffffff');
	document.documentElement.style.setProperty('--light-color', '#3b3b3b');

	if (loaded)
		document.getElementById("change-theme").innerHTML = '(light)';
}

function switchTheme() {
	if (localStorage.getItem('theme') == 'dark')
		localStorage.setItem('theme', 'light');
	else
		localStorage.setItem('theme', 'dark');
	setTheme(true);
}
