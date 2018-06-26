CREATE TABLE users (
  id serial primary key,
  username varchar(25) UNIQUE,
  email varchar(255) UNIQUE,
  first_name varchar(300),
  last_name varchar(300)
);

CREATE TABLE dreams (
  id serial primary key,
  user_id integer REFERENCES users
);

CREATE TABLE roles (
  id serial primary key,
  dream_id integer REFERENCES dreams,
  title varchar(300)
);

CREATE TABLE tools (
  id serial primary key,
  dream_id integer REFERENCES dreams,
  title varchar(300)
);

CREATE TABLE teams (
  id serial primary key,
  dream_id integer REFERENCES dreams,
  title varchar(300),
  url text
);