CREATE TABLE  teatro_responsables (
  id             int(11)  NOT NULL AUTO_INCREMENT,
  nombres        TEXT     NOT NULL,
  apellidos      TEXT     NOT NULL,
  email          TEXT     NOT NULL,
  cargo          TEXT     NOT NULL,
  telefono       TEXT     NOT NULL,
  fecha_creacion datetime NOT NULL,
  PRIMARY KEY(id)
);