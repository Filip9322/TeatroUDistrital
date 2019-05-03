import React from 'react'

export const Actividad = ({actividad={}, responsable={}, sala ={}}) =>{
  const fechaCreacion = actividad.fecha_creacion.split("T")[0]
  const fechaLimite   = actividad.fecha_limite.split("T")[0]
  return(
    <div className="c_actividad">
      <div>
        <span>ID: {actividad.id}</span>
      </div>
      <div>
        <p>{actividad.nombre}</p>
        <p><strong>Descripción:</strong> {actividad.descripcion}</p>
      </div>
      <div>
        <p><strong>F. Creación:</strong> {fechaCreacion}</p>
        <p><strong>F. Límite:</strong> {fechaLimite}</p>
      </div>
      <div>
        <span><a href="#hey">{responsable.nombres} {responsable.apellidos}</a></span>
        <Responsable responsable={responsable}/>
      </div>
      <div>
        <span><a href="#hey">{sala.nombre}</a></span>
        <Sala sala={sala} />
      </div>
    </div>
  )
}

export const Responsable = ({responsable={}}) =>{
  return(
    <div className="hide">
      <span>{responsable.id}</span>
      <span>{responsable.nombres}</span>
      <span>{responsable.apellidos}</span>
      <span>{responsable.email}</span>
      <span>{responsable.cargo}</span>
      <span>{responsable.fecha_creacion}</span>
    </div>
  )
}

export const Sala = ({sala={}}) => {
  return(
    <div className="hide">
      <span>{sala.id}</span>
      <span>{sala.nombre}</span>
      <span>{sala.horario}</span>
      <span>{sala.capacidad}</span>
    </div>
  )
}

export const ActivitiesHeader =({responsables={}, salas={}}) =>{
  //console.log(salas)
  return(
    <div className="h_activities">
      <div><strong><p>ID</p></strong></div>
      <div><strong><p>Nombre y Descripción</p></strong></div>
      <div><strong><p>Fecha de Creación & Fecha límite</p></strong></div>
      <div>
        <strong><p>Responsable</p></strong>
        <select name ="filterResponsable">
          <option disabled value="">Responsable</option>
          {Object.values(responsables).map((n,i)=>
            <option key={i} value={n.id} >{n.nombres} {n.apellidos}</option>
          )}
          }
        </select>
      </div>
      <div>
        <strong><p>Sala</p></strong>
        <select name ="filterSala">
          <option disabled value="">Sala</option>
          {Object.values(salas).map((n,i)=>
            <option key={i} value={n.id} >{n.nombre}</option>
          )}
          }
        </select>
      </div>
    </div>
  )
}