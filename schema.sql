CREATE TABLE "user" (
  id serial primary key,
  username varchar(25) UNIQUE,
  email varchar(255) UNIQUE,
  first_name varchar(300),
  last_name varchar(300)
);

CREATE TABLE "opp" (
  id serial primary key,
  title varchar(300),
  description text
);

CREATE TABLE "role" (
  id serial primary key,
  user_id integer REFERENCES "user",
  title varchar(300)
);

CREATE TABLE "tool" (
  id serial primary key,
  user_id integer REFERENCES "user",
  title varchar(300)
);

CREATE TABLE "team" (
  id serial primary key,
  user_id integer REFERENCES "user",
  title varchar(300),
  url text
);