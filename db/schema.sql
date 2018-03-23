-- DROP TABLE if exists users CASCADE;

-- CREATE TABLE users (
--   id BIGSERIAL PRIMARY KEY,
--   email VARCHAR(20) UNIQUE,
--   password_digest VARCHAR NOT NULL
-- );

DROP TABLE if exists categories CASCADE;

CREATE TABLE categories (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255)
  -- user_id INTEGER,
  -- FOREIGN KEY (user_id) REFERENCES users(id)  
);

DROP TABLE if exists characters;

CREATE TABLE characters (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),  
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);