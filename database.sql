CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (80) NOT NULL,
    last_name VARCHAR (1000) NOT NULL,
    grade VARCHAR (1) NOT NULL,
    goal INT NOT NULL
);

CREATE TABLE scores (
    id SERIAL PRIMARY KEY,
    score INT NOT NULL,
    date VARCHAR (50) NOT NULL,
    notes VARCHAR (1000),
    student_id INT REFERENCES "student" NOT NULL
);

-- Test Cases
