import React from 'react';

export class madlibForm extends React.Component {
    state = {
        firstAdj: '',
        firstVerb:'',
        secondAdj:'',
        firstAdv:'',
        secondVerb:''

    }

    render() {
        return <>
        <h1>hello</h1>
            <form className="container">

            <div className = "form-group">
                <label htmlFor="firstAdj">Please type in an adjective</label>
                <input type = "text"
                                   id= "firstAdj"
                                   name = "firstAdj"
                                   className = "form-control"
                                   value ={this.state.firstAdj}
                                   onChange = {e => this.setState({name:e.target.value})} />

            </div>

            </form>
        </>
    }
}