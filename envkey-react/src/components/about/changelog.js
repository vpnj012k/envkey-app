import React from "react"

import axios from "axios"

const renderChange = (change, i) => {
  return <li key={i}>{change}</li>
}

export default class Changelog extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      changes: null
    }
  }

  componentDidMount(){
    this._fetchChanges()
  }

  _fetchChanges(){
    axios.get('https://raw.githubusercontent.com/envkey/envkey-app/master/CHANGELOG.json')
         .then(({data}) => {
           this.setState({changes: data[this.props.version]})
         })
  }

  render(){
    return <div className="changelog">
      <ul>{this._renderChanges()}</ul>
    </div>
  }

  _renderChanges(){
    if (this.state.changes){
      return this.state.changes.map(renderChange)
    } else {
      return <li>Loading CHANGELOG…</li>
    }
  }

}