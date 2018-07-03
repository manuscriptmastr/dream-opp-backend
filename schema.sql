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

CREATE TABLE "dream" (
  id serial primary key,
  user_id integer REFERENCES "user"
);

CREATE TABLE "role" (
  id serial primary key,
  dream_id integer REFERENCES "dream",
  title varchar(300)
);

CREATE TABLE "tool" (
  id serial primary key,
  dream_id integer REFERENCES "dream",
  title varchar(300)
);

CREATE TABLE "team" (
  id serial primary key,
  dream_id integer REFERENCES "dream",
  title varchar(300),
  url text
);