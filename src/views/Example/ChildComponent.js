import React from 'react';

class ChildComponent extends React.Component { 

    state = {
        name :'',
        list: 'string',
        firstName:'',
        lastName:''
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
        // kiem tra data tu ham cha truyen xuong con
        console.log('>>> check props: ',this.props)

        // cách 1
        // let name = this.props.name;
        // let age = this.props.age

        // cách 2
        let {name, age} = this.props;
        return(
            <>
            <div>
                Hello ChildComponent name: {name} - {age}
            </div>
            {/* <div className='job-lists'>
                {
                    arrJobs.map((item, index) => {
                        return(
                            <div>
                                {item.title} - {item.salary}
                            
                            </div>
                        )
                    })
                }
            </div> */}
           </>
          
        )
    }
}
export default ChildComponent;