# Checkpoint 2 - 4h - List Games

## Main information

The app is available here: 

This app has been developed during the second Wild Code School checkpoint on Front End developement. The aim for us is to validate our skills and identify the notions we need to review.

## Techno

- CSS
- React.js (State Hooks)
- Axios 

## Instructions

Find below the  detaileds instructions we were given.

### Step 1 - React

<img src="https://giphygifs.s3.amazonaws.com/media/14hVsVZomE4hj2/giphy.gif" height="150">

In this step, you will create a new React project in which there will be 2 components that will display data from an API.

The API is available on this url [https://wild-games.herokuapp.com/api/v1](https://wild-games.herokuapp.com/api/v1).
You can use either [axios](https://github.com/axios/axios) or [fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) to recover the data.


- Create a new React project named **list-games** using `create-react-app`.
- Create 2 components `<GameList />` and `<Game />`.
- Use `<GameList />` component to fetch from the API and display each game on a `<Game />` component.
- `<Game />` retrieves with `props` the information of each game (`name`, `background_image`, `rating`...) and displays it in the format of your choice.
- `<Game />` contains a `<button>` that removes a game on click from the `state`. There is no need to remove it from the API.

### Step 2 - Bonus

Do you have any time left? Perfect! Perfect! You will be able to add some useful features to your React project!

#### Filter games by rating

- Add a `Best Games` button to filter games by `rating`.
- When you click on the button, only games with a `rating` greater than or equal to 4.5 are displayed.
- The button text is replaced by `All Games` and when clicked, all games are displayed again.

#### Add a screenshots page

For this bonus, use the `react-router` library.

- Add a navigation link in each game to see the images listed in the `short_screenshots` field. 
- Clicking on this link changes the page to `http://localhost:3000/jeu/screenshots/5` where 5 is the id of the selected game.
- Also display a navigation link to return to the home page.