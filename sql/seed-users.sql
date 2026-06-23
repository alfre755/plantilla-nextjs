-- sql/seed-users.sql
-- Inserta 50 usuarios de prueba en la tabla "user" (better-auth + src/db/schema.ts)
-- para poder ver cómo se comporta el listado/tabla/paginación con datos reales.
--
-- Solo llena la tabla "user". NO crea filas en "account", por lo que estos
-- usuarios NO tienen password y no pueden iniciar sesión por credenciales.
-- Es intencional: el objetivo es probar el listado (DataTable, badges,
-- ordenamiento por createdAt, búsqueda por email), no el login.
--
-- Cómo ejecutarlo:
--   psql "$DATABASE_URL" -f sql/seed-users.sql
-- o, si Postgres corre en docker-compose (servicio "postgres", contenedor "db-app"):
--   docker exec -i db-app psql -U postgres -d app_db < sql/seed-users.sql

BEGIN;

INSERT INTO "user" (
  id, name, email, email_verified, image,
  created_at, updated_at, role, banned, ban_reason, ban_expires
)
VALUES
  (gen_random_uuid()::text, 'Camila Rojas',       'camila.rojas@example.com',       true,  NULL, now() - interval '58 days', now() - interval '58 days', 'admin', false, NULL, NULL),
  (gen_random_uuid()::text, 'Matías Fuentes',     'matias.fuentes@example.com',     true,  NULL, now() - interval '57 days', now() - interval '57 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Valentina Soto',     'valentina.soto@example.com',     false, NULL, now() - interval '56 days', now() - interval '56 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Joaquín Pérez',      'joaquin.perez@example.com',      true,  NULL, now() - interval '55 days', now() - interval '55 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Fernanda Muñoz',     'fernanda.munoz@example.com',     true,  NULL, now() - interval '54 days', now() - interval '54 days', 'admin', false, NULL, NULL),
  (gen_random_uuid()::text, 'Sebastián Castro',   'sebastian.castro@example.com',   false, NULL, now() - interval '53 days', now() - interval '53 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Antonia Reyes',      'antonia.reyes@example.com',      true,  NULL, now() - interval '52 days', now() - interval '52 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Diego Morales',      'diego.morales@example.com',      true,  NULL, now() - interval '51 days', now() - interval '51 days', 'user',  true,  'Spam reiterado', now() + interval '30 days'),
  (gen_random_uuid()::text, 'Javiera Contreras',  'javiera.contreras@example.com',  false, NULL, now() - interval '50 days', now() - interval '50 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Nicolás Espinoza',   'nicolas.espinoza@example.com',   true,  NULL, now() - interval '49 days', now() - interval '49 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Catalina Vargas',    'catalina.vargas@example.com',    true,  NULL, now() - interval '48 days', now() - interval '48 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Benjamín Tapia',     'benjamin.tapia@example.com',     false, NULL, now() - interval '47 days', now() - interval '47 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Florencia Gómez',    'florencia.gomez@example.com',    true,  NULL, now() - interval '46 days', now() - interval '46 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Tomás Sepúlveda',    'tomas.sepulveda@example.com',    true,  NULL, now() - interval '45 days', now() - interval '45 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Isidora Bravo',      'isidora.bravo@example.com',      false, NULL, now() - interval '44 days', now() - interval '44 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Vicente Carrasco',   'vicente.carrasco@example.com',   true,  NULL, now() - interval '43 days', now() - interval '43 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Martina Fernández',  'martina.fernandez@example.com',  true,  NULL, now() - interval '42 days', now() - interval '42 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Agustín Salazar',    'agustin.salazar@example.com',    false, NULL, now() - interval '41 days', now() - interval '41 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Emilia Cáceres',     'emilia.caceres@example.com',     true,  NULL, now() - interval '40 days', now() - interval '40 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Cristóbal Ramírez',  'cristobal.ramirez@example.com',  true,  NULL, now() - interval '39 days', now() - interval '39 days', 'user',  true,  'Cuenta duplicada', NULL),
  (gen_random_uuid()::text, 'Constanza Torres',   'constanza.torres@example.com',   false, NULL, now() - interval '38 days', now() - interval '38 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Maximiliano Flores', 'maximiliano.flores@example.com', true,  NULL, now() - interval '37 days', now() - interval '37 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Josefa Araya',       'josefa.araya@example.com',       true,  NULL, now() - interval '36 days', now() - interval '36 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Gabriel Núñez',      'gabriel.nunez@example.com',      false, NULL, now() - interval '35 days', now() - interval '35 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Amanda Pizarro',     'amanda.pizarro@example.com',     true,  NULL, now() - interval '34 days', now() - interval '34 days', 'admin', false, NULL, NULL),
  (gen_random_uuid()::text, 'Ignacio Vera',       'ignacio.vera@example.com',       true,  NULL, now() - interval '33 days', now() - interval '33 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Renata Godoy',       'renata.godoy@example.com',       false, NULL, now() - interval '32 days', now() - interval '32 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Felipe Cortés',      'felipe.cortes@example.com',      true,  NULL, now() - interval '31 days', now() - interval '31 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Daniela Ojeda',      'daniela.ojeda@example.com',      true,  NULL, now() - interval '30 days', now() - interval '30 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Patricio Leiva',     'patricio.leiva@example.com',     false, NULL, now() - interval '29 days', now() - interval '29 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Rocío Alarcón',      'rocio.alarcon@example.com',      true,  NULL, now() - interval '28 days', now() - interval '28 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Hernán Bustos',      'hernan.bustos@example.com',      true,  NULL, now() - interval '27 days', now() - interval '27 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Paulina Aguilar',    'paulina.aguilar@example.com',    false, NULL, now() - interval '26 days', now() - interval '26 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Rodrigo Henríquez',  'rodrigo.henriquez@example.com',  true,  NULL, now() - interval '25 days', now() - interval '25 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Carla Saavedra',     'carla.saavedra@example.com',     true,  NULL, now() - interval '24 days', now() - interval '24 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Esteban Ulloa',      'esteban.ulloa@example.com',      false, NULL, now() - interval '23 days', now() - interval '23 days', 'user',  true,  'Solicitud del usuario', NULL),
  (gen_random_uuid()::text, 'Bárbara Concha',     'barbara.concha@example.com',     true,  NULL, now() - interval '22 days', now() - interval '22 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Álvaro Riquelme',    'alvaro.riquelme@example.com',    true,  NULL, now() - interval '21 days', now() - interval '21 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Francisca Maldonado','francisca.maldonado@example.com',false, NULL, now() - interval '20 days', now() - interval '20 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Raimundo Pino',      'raimundo.pino@example.com',      true,  NULL, now() - interval '19 days', now() - interval '19 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Millaray Vásquez',   'millaray.vasquez@example.com',   true,  NULL, now() - interval '18 days', now() - interval '18 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Cristian Lagos',     'cristian.lagos@example.com',     false, NULL, now() - interval '17 days', now() - interval '17 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Elisa Donoso',       'elisa.donoso@example.com',       true,  NULL, now() - interval '16 days', now() - interval '16 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Pedro Yáñez',        'pedro.yanez@example.com',        true,  NULL, now() - interval '15 days', now() - interval '15 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Trinidad Sandoval',  'trinidad.sandoval@example.com',  false, NULL, now() - interval '14 days', now() - interval '14 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Luciano Pacheco',    'luciano.pacheco@example.com',    true,  NULL, now() - interval '13 days', now() - interval '13 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Sofía Quiroz',       'sofia.quiroz@example.com',       true,  NULL, now() - interval '12 days', now() - interval '12 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Ariel Figueroa',     'ariel.figueroa@example.com',     false, NULL, now() - interval '11 days', now() - interval '11 days', NULL,    false, NULL, NULL),
  (gen_random_uuid()::text, 'Belén Toro',         'belen.toro@example.com',         true,  NULL, now() - interval '10 days', now() - interval '10 days', 'user',  false, NULL, NULL),
  (gen_random_uuid()::text, 'Ignacia Pino',       'ignacia.pino@example.com',       true,  NULL, now() - interval '9 days',  now() - interval '9 days',  'user',  false, NULL, NULL)
ON CONFLICT (email) DO NOTHING;

COMMIT;