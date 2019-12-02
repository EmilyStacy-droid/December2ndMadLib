import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {madLibresult} from './madLibresult.jsx';
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

            

            <div class="container mt-2" style={{"display":this.state.isClicked==true?"block":"none"}}>
                    <p class="h6">
                    You felt <span class="badge badge-secondary">{this.state.firstAdj}</span> while checking the baby Yoda meme on a Saturday morning.
                   </p>

                    <p class="h6">
                    While you took a break from the memes, <span class="badge badge-secondary">{this.state.firstVerb}</span> and thinking about the importance of memes in your life, 
                    you got an email from Tim.</p>
                    
                    <p class="h6">
                    In the email Tim said you did a/an <span class="badge badge-secondary"> {this.state.secondAdj}</span> job on your UNO project and he wanted to talk to you on Monday. 
                    </p>   

                    <p class="h6">
                    On Monday, you walked <span class="badge badge-secondary">{this.state.firstAdv}</span> into Tim’s office. It turned out Tim just wanted to give you a birthday surprise and invited you to play a UNO game.    
                    </p> 

                    <p class="h6">

                    After the UNO project you had a complicated feeling about the UNO game, so you could not help but <span class="badge badge-secondary">{this.state.secondVerb}</span> the UNO cards in front of him.
                    </p>
                </div>
             <madLibresult results = {this.state}/> 
        </>
    }

    onSubmit(){
       this.setState({isClicked:true});
        
    }

    onReset(){
        this.setState({firstAdj:'',firstVerb:'',secondAdj:'',firstAdv:'',secondVerb:'', isClicked:false});
       

    }
}