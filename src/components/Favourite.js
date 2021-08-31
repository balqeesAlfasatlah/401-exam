import React, { Component } from 'react'
import FavCrypto from './FavCrypto';
import ModalForm from './ModalForm';

export class Favourite extends Component {

    constructor(props){
        super(props);
        this.state={
          favData : [] ,
          show : false,
          image_url : " ",
          title : " ",
          description : " ",
          toUSD : " ",
          showModel : false,
          index : 0

        }
      }

      componentDidMount=()=>{
        let url3='http://localhost:3008/getData'
        axios.get(url3).then(item=>{
         this.state={
            favData : item.data ,
           show : true
         }
        })
      }

      showModelForm=()=>{
          this.setState={
            image_url : this.state.favData.image_url ,
            title :this.state.favData.title ,
            description : this.state.favData.description ,
            toUSD : this.state.favData.toUSD ,
            index : index ,
            showModel : true
          }
      }

      delete=(index)=>{
          let id =this.state.favData[index].id
          axios.delete(`http://localhost:3008/deleteData/${id}`).then(item=>{
            this.state={
               favData : item.data ,
              show : true
            }
           })

      }

      handleClose=()=>{
        this.setState={
            
            showModel : false
          }
      }


      update=(e)=>{
        let id =this.state.favData[this.state.index].id
        let data ={
            image_url : e.target.image_url.value ,
            title :e.target.title.value ,
            description :e.target.description.value,
            toUSD : e.target.toUSD.value,

        }
        axios.put(`http://localhost:3008/updateData/${id}`,data).then(item=>{
            this.state={
               favData : item.data ,
              show : true
            }
           })


        
    }
    render() {
        return (
            <>
                 {this.state.show && this.state.favData.map((item , idx)=>{
                     <FavCrypto item={item} idx={idx} delete={this.delete} showModelForm={this.showModelForm}/>
                 })}

                 <ModalForm image_url={this.state.image_url} title={this.state.title} 
                 image_url={this.state.description} image_url={this.state.description}
                 showModel={this.state.showModel} update={this.update} handleClose={this.handleClose}

                 />
            </>
        )
    }
}

export default Favourite
