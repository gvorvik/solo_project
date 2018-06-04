CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (80) UNIQUE NOT NULL,
    last_name VARCHAR (1000) NOT NULL,
    grade VARCHAR (1) NOT NULL,
    goal INT NOT NULL,
    initial_score INT NOT NULL
);

-- Test Cases
INSERT INTO "student" ("first_name", "last_name", "grade", "goal", "initial_score") 
VALUES ('Clay', 'Orvik', '2', 60, 35), 
('Becky', 'Orvik', '3', 90, 68), 
('Alex', 'Barnier', 'K', 25, 9);