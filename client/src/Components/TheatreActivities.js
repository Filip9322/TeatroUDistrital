import React, {Component} from 'react'
import './TheatreActivities.css'

const Actividad = ({actividad={}, responsable={}}) =>{
  console.log(responsable)
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
        <p><strong>F. Creación:</strong> {actividad.fecha_creacion}</p>
        <p><strong>F. Límite:</strong> {actividad.fecha_limite}</p>
      </div>
      <div>
        <span>{responsable.nombres} {responsable.apellidos}</span>
      </div>
      <div>
        <span>{actividad.sala}</span>
      </div>
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
      responsables:{}
    }
  }
  componentDidMount(){
    this.getActivities()
      .then(activities => this.setState({activities}))
      .catch(console.error);
    this.getResponsables()
      .then(responsables => this.setState({responsables}))
      .catch(console.error);
  }
  render(){
    const activities = this.state.activities
    const responsables = this.state.responsables
    return(
      <section>
        <h2>Actividades</h2>
        <ActivitiesHeader />
        {Object.entries(activities).map((n,i) => {
            let idResponsable  = activities[i].responsable
            let objResponsable = Object.values(responsables).find(o => o.id == idResponsable)
            return(
              <Actividad key={i} actividad={activities[i]} responsable={objResponsable}/>
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
}


export default TheatreActivities;