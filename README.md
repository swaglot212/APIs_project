# APIs_project

## Intructions

- Last time, we copied and pasted some JSON data from https://randomuser.me. This time, we’ll get data with an API request.

- You will create a web page that displays the data you get from the API request. Also, the user should be able to sort the data being displayed.

- The API request should be for a random number between 50 - 100

- Before you begin working on your site, wireframe your page and submit your wireframe to be approved. Once approved, start working!
    - Make sure to include what information about the user you want to display

1. Before fetching data from the API, generate a random number between 50 - 100 to be used in the API request
    - *Hint: look back to week 1 when we did random*

2. Once you have successfully fetched the random users data from the API, create a search filter for gender
    - This API only has the values of "male" and "female"
    - The page should start off blank, then only filter once the button is pressed
        - *Hint: the onclick event should be inside your .then statement*
    - When there is a new search, the previous content should be REPLACED with the new search

3. Once you have your gender filter working, add 2 new <input> tags to your HTML to also filter for first name, and last name
    - Your code should filter even if the first or last name inputs are empty, so your gender filter should still work if the name filters are blank
    - *Hint: to test if your code works, first filter by gender, then try inputting a name that pops up*

4. Using your knowledge of DOM and CSS, style your site to look how you want it to :)

## Extra Credit

    - Instead of using a “Submit” button, allow the filtering to occur on every keystroke (the filtering occurs while the user is typing).