create database futbol;

use futbol;

create table Arquero(
	id int auto_increment primary key,
    nombre varchar(100),
    apellido varchar(100),
    telefono varchar(13),
    fecha_nac date,
    correo varchar(100) unique,
    usuario varchar(100) unique
);

insert into arquero (nombre,apellido,telefono,fecha_nac,correo,contra,usuario)
values
('pablo','escalante','996798123','2000-03-03','p@gmail.com','p123','canelita')
;

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