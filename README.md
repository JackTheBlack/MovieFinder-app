# MovieFinder-app
                                                      Movie Finder App
				                         Documentation

For implementation:
		With the console,on path “movie-finder-app/json-server”, run script “npm start” to run the json server and then with VS code select login.html or index.htlm, right click and left click on “run with live server”
In case there is no validation token on any storage and try to open index.html you will be redirected to login.html 



Available Users for Login:
		email: 		nicolas@mail.com
		passWord:	Nicolas666


Functions:

	Popular.js:
			getMostPopular(): brings the 20 most popular movies

showMostPopular():displays the most popular movies(start from the second most popuLAR)

theMostPopular():display the most popular movies on the main banner;

	card.js;
			createCard() & createModalCard: create movie cards

	Similar.js:
			getSimiliar(id): brings similar movies according to certain id
			card


	stars.js: 	shows n stars according to a movie average votes.

checkLog: checks for a userToken at sessionStorage or localStorage. If not found   redirects to login.js


	logOut.js: clean the storage and redirects to login.js

	dateFormat.js:  change format dd/mm/yyyy to “dd  month, yy”

	validation.js : validates login inputs

	modal.js:  fills the modal context 

	genres.js:  brings the movie genres according to a certain array.

	curOverview.js:  cuts the overview on the movie cards.

	Google doc:

	https://docs.google.com/document/d/1ff5sWQI7iRIQ4CFRzPPVRJiFjObKVLpKDIUQpCvfi1g/edit
