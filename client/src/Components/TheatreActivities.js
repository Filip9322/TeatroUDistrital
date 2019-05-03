import React, {Component} from 'react'
import './TheatreActivities.css'

const Actividad = ({actividad={}, responsable={}, sala ={}}) =>{
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
        <span><a href="#">{responsable.nombres} {responsable.apellidos}</a></span>
        <Responsable responsable={responsable}/>
      </div>
      <div>
        <span><a href="#">{sala.nombre}</a></span>
        <Sala sala={sala} />
      </div>
    </div>
  )
}

const Responsable = ({responsable={}}) =>{
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

const Sala = ({sala={}}) => {
  return(
    <div className="hide">
      <span>{sala.id}</span>
      <span>{sala.nombre}</span>
      <span>{sala.horario}</span>
      <span>{sala.capacidad}</span>
    </div>
  )
}

const ActivitiesHeader =() =>{
  return(
    <div className="h_activities">
      <div><strong><p>ID</p></strong></div>
      <div><strong><p>Nombre y Descripción</p></strong></div>
      <div><strong><p>Fecha de Creación & Fecha límite</p></strong></div>
      <div><strong><p>Responsable</p></strong></div>
      <div><strong><p>Sala</p></strong></div>
    </div>
  )
}

class TheatreActivities extends Component{
  constructor(){
    super()
    this.state = {
      activities:{},
      responsables:{},
      rooms:{}
    }
  }
  componentDidMount(){
    this.getActivities()
      .then(activities => this.setState({activities}))
      .catch(console.error);
    this.getResponsables()
      .then(responsables => this.setState({responsables}))
      .catch(console.error);
    this.getRooms()
      .then(rooms => this.setState({rooms}))
      .catch(console.error);
  }
  render(){
    const activities   = this.state.activities
    const responsables = this.state.responsables
    const rooms        = this.state.rooms
    return(
      <section>
        <h2>Actividades</h2>
        <ActivitiesHeader />
        {Object.entries(activities).map((n,i) => {
            const objResponsable = Object.values(responsables).find(o => o.id === activities[i].responsable)
            const objRoom        = Object.values(rooms).find(o => o.id === activities[i].sala)
            return(
              <Actividad key={i} actividad={activities[i]} responsable={objResponsable} sala={objRoom}/>
            )
          })
        }
      </section>
    )
  }

  getActivities = async () => {
    const resp = await fetch('/actividades/me');

    window._resp = resp;
    let text = await resp.text();
    let data = null;

    try {
      data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
    } catch (e) {
      console.err(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  }

  getResponsables = async () => {
    const resp = await fetch('/responsables/me');

    window._resp = resp;
    let text = await resp.text();
    let data = null;

    try {
      data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
    } catch (e) {
      console.err(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  }

  getRooms = async () => {
    const resp = await fetch('/salas/me');

    window._resp = resp;
    let text = await resp.text();
    let data = null;

    try {
      data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
    } catch (e) {
      console.err(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  }
}


export default TheatreActivities;