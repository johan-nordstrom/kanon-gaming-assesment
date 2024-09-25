- Create the database
CREATE DATABASE casino_db;

-- Use the database
USE casino_db;

-- Create Casino table
CREATE TABLE Casino (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

-- Create Game table
CREATE TABLE Game (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    casino_id INT,
    FOREIGN KEY (casino_id) REFERENCES Casino(id)
);

-- Create Country table
CREATE TABLE Country (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    allowed BOOLEAN
);

-- Create Player table
CREATE TABLE Player (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    favorite_game_id INT,
    FOREIGN KEY (favorite_game_id) REFERENCES Game(id)
);

-- Create GameCountry junction table for the many-to-many relationship
CREATE TABLE GameCountry (
    game_id INT,
    country_id INT,
    PRIMARY KEY (game_id, country_id),
    FOREIGN KEY (game_id) REFERENCES Game(id),
    FOREIGN KEY (country_id) REFERENCES Country(id)
);

-- Create favorite  junction table for the many-to-many relationship
CREATE TABLE Favorite (
    Player_id INT,
    Game_id INT,
    PRIMARY KEY (game_id, player id),
    FOREIGN KEY (game_id) REFERENCES Game(id),
    FOREIGN KEY player REFERENCES player
);