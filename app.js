// Get all elements needed for even listeners
const form = document.querySelector('#form');
const image = document.querySelector('input[name="url"');
const topText = document.querySelector('input[name="toptext"');
const bottomText = document.querySelector('input[name="bottomtext"');
const btn = document.querySelector('input[name="button"');
const memeResults = document.querySelector('.memeresults');

// Function to create new meme from form data
const makeNewMeme = function(img, top, bottom) {
	// create the space for a new meme in a dive
	const newMeme = document.createElement('div');
	newMeme.classList.add('memecontainer');
	const meme = new Image();
	meme.src = img;
	//newMeme.append(meme);

	// create space for top text div
	const text1 = document.createElement('div');
	text1.classList.add('top-text');
	text1.innerText = top;
	//newMeme.append(text1);

	// create space for bottom text div
	const text2 = document.createElement('div');
	text2.classList.add('bottom-text');
	text2.innerText = bottom;
	//newMeme.append(text2);

	// add delete button to meme
	const removeBtn = document.createElement('button');
	removeBtn.innerText = 'Delete Me!';

	newMeme.append(meme, text1, text2, removeBtn);
	return newMeme;
};

// Event Listeners for adding new Meme to the Dom
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const resultMeme = makeNewMeme(image.value, topText.value, bottomText.value);
	memeResults.append(resultMeme);
	form.reset();
});

memeResults.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}
});
