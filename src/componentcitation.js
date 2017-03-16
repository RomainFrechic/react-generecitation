

import React from 'react';


class Citation extends React.Component{
  render(){
    return(
      <div>
      <p>
              {this.props.details.citation}
              <span>- {this.props.details.auteur}</span>
            </p>
            </div>
      )
  }
}

export default Citation;