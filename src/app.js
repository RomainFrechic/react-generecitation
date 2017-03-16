import React from 'react';
import citations from './citations';
import Citation from './componentcitation';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      citations:[{
        auteur:'Henry David Thoreau',
        citation:'Si je suis venu au monde, ce n’est pas pour le transformer en un lieu où il fasse bon vivre, mais pour y vivre.',
      }],
      random:0,
    };
  }
	//state = {};
    
    componentDidMount(){
      this.setState({
        citations:citations
      });
       
    }

    genererCitation(){
      let random = Math.floor(Math.random()*(this.state.citations.length-0)+0)

      this.setState({
          random:random
      })
      

    }


 

	render() {
		return (
          <div>
          	<Citation details={this.state.citations[this.state.random]} />
          	<button onClick={this.genererCitation.bind(this)} >Une autre citation!</button>
          </div>
			)
	}
}

export default App;

