import React from 'react';
import {MadLibresult} from './MadLibresult';
import {Link, Redirect} from 'react-router-dom';
export class madlibForm extends React.Component {
    state ={
        firstAdj: '',
        firstVerb:'',
        secondAdj:'',
        firstAdv:'',
        secondVerb:'',
        isClicked: false
    
};


    render() {
        return <>
            {this.state.isClicked==true?<MadLibresult results={this.state}/>:null}
             {/* <MadLibresult style={{"display":this.state.isClicked==true?"block":"none"}} results = {this.state} />  */}
            <form className="container">

            <div className = "form-group">
                <label htmlFor="firstAdj">Please type in an <b>adjective</b></label>
                <input type = "text"
                                   id= "firstAdj"
                                   name = "firstAdj"
                                   className = "form-control"
                                   value ={this.state.firstAdj}
                                   onChange = {e => this.setState({firstAdj:e.target.value})} />

            </div>

            <div className = "form-group">
                <label htmlFor="firstVerb">Please type in <b>a verb ending with -ing</b></label>
                <input type = "text"
                                   id= "firstVerb"
                                   name = "firstVerb"
                                   className = "form-control"
                                   value ={this.state.firstVerb}
                                   onChange = {e => this.setState({firstVerb:e.target.value})} />

            </div>

            <div className = "form-group">
                <label htmlFor="secondAdj">Please type in <b>another adjective</b></label>
                <input type = "text"
                                   id= "secondAdj"
                                   name = "secondAdj"
                                   className = "form-control"
                                   value ={this.state.secondAdj}
                                   onChange = {e => this.setState({secondAdj:e.target.value})} />

            </div>

            <div className = "form-group">
                <label htmlFor="firstAdv">Please type in <b>an adverb</b></label>
                <input type = "text"
                                   id= "firstAdv"
                                   name = "firstAdv"
                                   className = "form-control"
                                   value ={this.state.firstAdv}
                                   onChange = {e => this.setState({firstAdv:e.target.value})} />

            </div>

            <div className = "form-group">
                <label htmlFor="secondVerb">Please type in <b>a verb without tenses</b></label>
                <input type = "text"
                                   id= "secondVerb"
                                   name = "secondVerb"
                                   className = "form-control"
                                   value ={this.state.secondVerb}
                                   onChange = {e => this.setState({secondVerb:e.target.value})} />

            </div>

            <div>
                           <button type = "button" className = "btn btn-primary btn-lg btn-block"
                            onClick = {e => this.onSubmit()} >
                               Submit
                           </button>

                           <button type = "button" className = "btn btn-secondary btn-lg btn-block"
                            onClick = {e => this.onReset()} >
                               Reset
                           </button>

                       </div>
            </form>

            
        </>
    }

    onSubmit(){
       this.setState({isClicked:true});
        
    }

    onReset(){
        this.setState({firstAdj:'',firstVerb:'',secondAdj:'',firstAdv:'',secondVerb:'', isClicked:false});
       

    }
}