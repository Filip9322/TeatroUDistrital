CREATE TABLE  teatro_actividades (
  id             int(11)  NOT NULL AUTO_INCREMENT,
  nombre         TEXT     NOT NULL,
  descripcion    TEXT     NOT NULL,
  responsable    int(11)  NOT NULL,
  sala           int(11)  NOT NULL,
  estado         TEXT     NOT NULL,
  fecha_creacion datetime NOT NULL,
  fecha_limite   datetime NOT NULL,
  PRIMARY KEY(id)
);