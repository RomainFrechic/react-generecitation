import React from 'react';
import citations from './citations';
import Citation from './componentcitation';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      citation:null
    };
  }
	// state = {};
    
    ComponentWillMount(){
      this.setState({
        citation:citations
      });
       this.genererCitation();
    }

    genererCitation(event){
        
        //On transforme les citation en Array
        const keyArray = Object.keys(citations);
        // selectionner une citation au hasard
        const randomKey = keyArray[Math.floor(Math.random()* keyArray.lenght)];
  // On définis une condition pour éviter d'avoir la même citation plusieurs fois à la suite
        if(this.state.citation === citations[randomKey].citation){
          this.genererCitation();
          return;
        }
        this.setState(citations[randomKey]);

    };


	render() {
		return (
          <div>
          	<Citation details={this.state} />
          	<button onClick={e => this.genererCitation(e)} >Une autre citation!</button>
          </div>
			)
	}
}

export default App;