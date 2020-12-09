import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from'./Avatarlist';


 class Avatar extends Component{
     constructor(){
         super();
         this.state ={
             name: "Welcome to Avatar World"
         }
     }
     namechange(){
         this.setState({
            name: "Welcome to Anum World"
         })
     }
           render(){
            const Avatararray = [
                {
                    id : "1" ,
                    name :"Anum" ,
                    work :"Web Developer"
                },
        
                {
                    id : "2" ,
                    name :"Fatima" ,
                    work :"House wife"
                },
        
                {
                    id : "3" ,
                    name :"Dua" ,
                    work :"CCR"
                },
        
                {
                    id : "1" ,
                    name :"Inshirah" ,
                    work :"Marketing Student"
                }
        
            ]
         const ArrayAvatarCard=   Avatararray.map( (avatarcard, i, ) => {
                return <Avatarlist key ={i} id = {Avatararray[i].name} 
                name ={Avatararray[i].name}
                 work ={Avatararray[i].work}/>
        
            })

            return( <div className="main-page"> 
            <h1>{this.state.name}</h1>
            {ArrayAvatarCard}
        
        <button onClick={ ( ) => this.namechange ()}>Subscribe</button>
        </div>
        )
           }
        }


    


export default Avatar;