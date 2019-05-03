import React, {Component} from 'react'
import PropTypes from 'prop-types'

const Actividad = ({actividad={}}) =>{
  return(
    <div>
      <span>ID: {actividad.id}</span>
      <span>{actividad.nombre}</span>
      <p>{console.log(actividad)}</p>
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