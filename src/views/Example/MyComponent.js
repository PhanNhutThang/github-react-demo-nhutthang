import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component { 

    state = {
        name :'',
        list: 'string', 
        firstName:'',
        lastName:'',
        arrJobs:[           
                {id:'abcJob1', title: 'developer', salary:'500 $'},
                {id:'abcJob2', title: 'Testers', salary:'400 $'},
                {id:'abcJob3', title: 'Manager', salary:'1000 $'}
            
        ]
    }
    handleOnChangeName = (event) =>{
        this.setState({
            name: event.target.value,           
        })
    }
    handleClickButton = () =>{
        console.log('hit the button')
        alert('Click me')
    }
    handlecChangeFirstName = (event) =>{
        this.setState({
            firstName:event.target.value
        })
    }
    handleChangLastName = (event) =>{
        this.setState({
            lastName:event.target.value
        })
    }
    handleSubmit =(event) =>{
        event.preventDefault()
        console.log('>>> check data input: ', this.state)
    }
    render(){
        // let name = 'IT'
        console.log('>>> call render: ',this.state)
        return(
            <>
            <div>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                        onChange={(event)=> this.handlecChangeFirstName(event) }/>
                    <br/>
                    <label htmlFor="lname">Last name:</label>
                    <br/>
                    <input 
                        type="text" 
                        value={this.state.lastName}
                        onChange={(event) =>this.handleChangLastName(event)}/>
                    <br/>
                    <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                    />
                     
                </form> 
            </div>
            <div className="First">
                <input value={this.state.name} type="text" 
                onChange={(event) => this.handleOnChangeName(event)}></input>
                My name is {this.state['name']}
            </div>
            {/* <div>Hello Nhut Thang {name}</div>           */}
            <div>Công nghệ thông tin {this.state.one}</div>
            <div>List {this.state['list']}</div>
            <div className="Third">
                <button onClick={() => this.handleClickButton()}>Click me</button>
            </div>
           
           <ChildComponent
           name = {this.state.firstName}
           age = {'22'}
           />
            </>
        )
    }
}
export default MyComponent;