
# A. Flix.com User Stories

## 1. Create account
* Users create a new account with an email/password combination. The account is verified by sending the user a verification email.
* Users choose a payment plan.
* Payment is done through verified 3rd party providers (e.g. Stripe)
* Upon verification & payment, users can access the account.
## 2. Login
* Users enter their credentials & access their homepage.
* Homepage consists of popular shows & the user's favorites.
## 3. Browse
* Users filter by movies/shows/or otherwise.
* Categories & sub-categories for genres & sub-genres.
* Ranking results based on user's history & preferences.
## 4. Search
* Users search by title or performers (e.g., Titanic, Kate Winslet).
* Results ranked by relevance/popularity.
## 5. Add/Remove favorites
* Users add or remove titles from their favorites list.
## 6. Likes & Dislikes Rating
* Users like/dislike titles (Likes could be used to suggest relevant titles in the future).
## 7. Watch Title
* Video controls for playback.
## 8. Load trailer/teaser on Hover
* When the user hovers with the mouse pointer on a title (web) or clicks title to view details (mobile), play the title's trailer/teaser.






# B. I/II Features

## 1. Play Videos
* Use 3rd party video player & integrate it with the website.
* **2 sprints** for adoption
  * Reading through documentation.
  * developing mini demo apps as PoC.
* **4-5 sprints** building a custom wrapper around the 3rd party video player.

## 2. Search for titles
* Normal lookup behavior (**1-2 sprints**)
* Caching (**1-2 sprints**)

## 3. Favorite/Unfavorite
* **1-2 sprints** for storing user's favorite titles for easier access & future recommendations.

## 4. AI-driven recommendation system
* I am not personally involved with AI systems & I don't have enough experience to accurately judge. However, I would roughly estimate **5-6 sprints** for model development, model training, adjustments, and beta release.

## 5. Authentication 
* **2 sprints**






# B. III. Rest endpoints

## 1. /api/favorites/all - Method: GET
## 2. /api/titles/genre/{genreId} - Method: GET
gets titles by genreId
## 3. /api/titles/title/{titleId} - Method: GET
gets title by id (Useful with SEO, among other things)
## 4. /api/titles/search?q={} - Method: GET
search for a title
## 5. /api/home - Method: GET
fetches recommended & promotoed tv shows + favorites
## 6. /api/favorite/{titleId} - Method: DELETE
add/remove favorite titles
## 7. /api/login - Method: POST
## 8. /api/signup - Method: POST
## 9. /api/logout - Method: POST
## 10. /api/play/{titleId} - Method: GET