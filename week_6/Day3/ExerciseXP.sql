--Get a list of all film languages.
-- SELECT * FROM language;

-- SELECT title,description,language_id from film

-- SELECT film.title, film.description,language.name
-- FROM film
-- INNER JOIN language
-- ON film.language_id= language.language_id;

-- CREATE TABLE new_film(
--  id SERIAL PRIMARY KEY,
-- name_new_film VARCHAR (50) NOT NULL
-- )

-- INSERT INTO new_film(name_new_film) VALUES
-- ('Inception'),
-- ('Shutter Island'),
-- ('Titanic'),
-- ('Venom'),
-- ('Avengers End Game'),
-- ('Tenet')

-- SELECT * FROM new_film;



-- INSERT INTO customer_review(film_id,language_id,title,score,review_text,last_update) VALUES
-- ((SELECT film_id from film WHERE film_id = 54),
--  (SELECT language_id from language WHERE language_id = 1),
--   'Hey',
--   8,
--  'Superbe !!!',
--  '11/02/2003'
-- )
		
--  CREATE TABLE customer_review(
-- 	review_id SERIAL PRIMARY KEY,
--    film_id INTEGER REFERENCES new_film (id) ON DELETE RESTRICT,
--  	language_id  INTEGER REFERENCES language (language_id ) ON DELETE RESTRICT,
--  	title VARCHAR (50) NOT NULL,
--  	score INTEGER NOT NULL,
-- 	 CHECK(score > 0 and score < 11),
-- 	review_text VARCHAR (100) NOT NULL,
-- 	last_update DATE NOT NULL)
  
-- INSERT INTO customer_review(film_id,language_id,title,score,review_text,last_update) 
-- VALUES
-- ((SELECT id from new_film WHERE name_new_film = 'Titanic'),
--  (SELECT language_id from language WHERE language_id = 1),
--   'Titanic',  
--    9,
--   'RIP Jack !!!',
--   '11/02/2010'
--  )


-- SELECT * FROM customer_review;

-- DELETE FROM new_film WHERE id = 1




