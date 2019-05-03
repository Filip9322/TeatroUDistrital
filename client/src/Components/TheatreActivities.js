import React, {Component} from 'react'
import './TheatreActivities.css'

const Actividad = ({actividad={}}) =>{
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
        <span>{actividad.responsable}</span>
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
    this.state = {}
  }
  componentDidMount(){
    this.getActivities()
      .then(res => this.setState(res))
      .catch(console.error);
  }
  render(){
    const activities = this.state
    return(
      <section>
        <h2>Actividades</h2>
        <ActivitiesHeader />
        {Object.entries(activities).map((n,i) => {
            return(
              <Actividad key={i} actividad={activities[i]} />
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
}


export default TheatreActivities;