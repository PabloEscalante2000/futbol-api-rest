create database futbol;

use futbol;

create table arquero(
	id int auto_increment primary key,
    nombre varchar(100),
    apellido varchar(100),
    telefono varchar(13),
    fecha_nac date,
    correo varchar(100) unique,
    contra varchar(100),
    usuario varchar(100) unique
);

insert into arquero (nombre,apellido,telefono,fecha_nac,correo,contra,usuario)
values
('pablo','escalante','996798123','2000-03-03','p@gmail.com','p123','canelita')
;

update arquero set nombre=?, apellido=?,telefono=?, fecha_nac = ?,
correo=?, contra=?, usuario=?, foto=?, horario=? where id=?;

create table alumno (
	id int auto_increment primary key,
    nombre varchar(255) not null,
    apellido varchar(255) not null,
    edad int not null,
    sexo char(1) not null,
    puntos int default 0,
    id_profesor int,
    foreign key (id_profesor) references arquero(id)
)

insert into alumno (nombre,apellido,edad,sexo,id_profesor) values ('paco','yunque',10,'M',1)

/*create table sesion(
	id int auto_increment primary key,
    id_arquero int,
    puntaje_total int,
    foreign key (id_arquero) references arquero(id)
);

create table tiro(
	id int auto_increment primary key,
	puntaje boolean,
    id_sesion int,
    foreign key (id_sesion) references sesion(id)
);*/