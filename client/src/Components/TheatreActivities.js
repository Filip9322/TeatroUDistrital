import React, {Component} from 'react'
import './TheatreActivities.css'
import {Actividad, ActivitiesHeader}  from './Dumb'

class TheatreActivities extends Component{
  constructor(){
    super()
    this.state = {
      activities:{},
      responsables:{},
      rooms:{},
      responsable:'',
      sala:''
    }
    this.modifyFilterResponsable = this.modifyFilterResponsable.bind(this)
    this.modifyFilterSala        = this.modifyFilterSala.bind(this)
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
  modifyFilterResponsable(filterId){
    const responsable = filterId.target.value
    this.setState({responsable})
  }
  modifyFilterSala(filterId){
    const sala = filterId.target.value
    this.setState({sala})
  }
  render(){
    const activities     = this.state.activities
    const responsables   = this.state.responsables
    const rooms          = this.state.rooms
    const {modifyFilterResponsable, modifyFilterSala} = this
    return(
      <section>
        <h2>Actividades</h2>
        <p>{this.state.responsable}</p>
        <ActivitiesHeader responsables={responsables}
                          salas={rooms}
                          onChangeResponsable={modifyFilterResponsable}
                          onChangeSala = {modifyFilterSala}/>
        {Object.entries(activities).map((n,i) => {
            const objResponsable = Object.values(responsables).find(o => o.id === activities[i].responsable)
            const objRoom        = Object.values(rooms).find(o => o.id === activities[i].sala)
            return(
              <Actividad key={i}
                         actividad={activities[i]}
                         responsable={objResponsable}
                         sala={objRoom}
                         filterResponsable={this.state.responsable}/>
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