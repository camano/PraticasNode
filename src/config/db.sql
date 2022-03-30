create database pruebasdb;

CREATE TABLE IF NOT EXISTS usuarios (
    usuario_id SERIAL PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL,   
    idgoogle VARCHAR(250)       
);

CREATE TABLE IF not EXISTS tarea(
  tarea_id SERIAL PRIMARY key ,
  tarea_descripcion varchar(150) not null,
  usuario_id INT,
  FOREIGN key(usuario_id)
    REFERENCES usuarios (usuario_id)
);
insert into usuarios (email,password)values ('camanojhonatan@gmail.com','123456');

INSERT INTO tarea (tarea_descripcion,usuario_id)values('tarea de matematicas',1);
