-- Adminer 4.7.5 PostgreSQL dump

\connect "pictures";

CREATE SEQUENCE pictures_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 5 CACHE 1;

CREATE TABLE "public"."pictures" (
    "id" integer DEFAULT nextval('pictures_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    "country" character varying NOT NULL,
    "painter" character varying NOT NULL,
    "date" date NOT NULL,
    CONSTRAINT "pictures_id" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "pictures";
INSERT INTO "pictures" ("id", "name", "country", "painter", "date") VALUES
(1,	'Pintura',	'Argentina',	'Sergio',	'2000-01-01'),
(2,	'Pintura 2',	'Brasil',	'Ronaldinho',	'2000-01-01'),
(3,	'Pintura 3',	'España',	'Raul',	'2000-01-01'),
(4,	'Monalisa',	'Italia',	'Picasso',	'2000-01-02'),
(5,	'La Noche',	'Francia',	'Van Gogh',	'1952-01-02');

CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 7 CACHE 1;

CREATE TABLE "public"."users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "username" character varying NOT NULL,
    CONSTRAINT "users_id" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "users";
INSERT INTO "users" ("id", "username") VALUES
(1,	'Juan Perez'),
(2,	'Pedro Lopez'),
(3,	'Martin Palermo'),
(4,	'Lionel Messi'),
(5,	'Roman Riquelme'),
(6,	'Carlos Tevez');

-- 2020-01-12 02:09:36.082485+00