import React, { Component } from 'react';
import './popUp.css'

// classe do poppup
class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NewComment : ''
        }
        this.popupClose = this.popupClose.bind(this);
        this.MyCommentSub = this.MyCommentSub.bind(this);
        this.MyComment = this.MyComment.bind(this);

    }

    // facha o poppup

    popupClose() {
        this.props.popupClose();

    }

// criar um novo comentário
MyComment (evt){
    this.setState ({
        NewComment: evt .target.value
    });
}

MyCommentSub (evt){
    evt.preventDefault();
    this.props.MyCommentSub(this.state.NewComment,this.props.idpost);
    this.setState({
        NewComment: ''
    })
}


    render() {
        return (
            <div className="popup">
                <div className='popup_inner'>
                    <img src={this.props.image} height="200" />
                    <h4>{"👽 "} {this.props.user}</h4>
                    <h4>{"📜 "}{this.props.subtitle}</h4>
                    <h4>{"🗓️ "} {this.props.date.substring(0, this.props.date.indexOf("T"))}</h4>                   
                    <h4>{"👍 "} {this.props.likes}</h4>
               

                {
                    this.props.comments.map(
                        function (c) {
                            // retorna todos os elementos 
                            // vai devolver o texto, o user e a data do comentário
                            return ([


                                <table width="200" border="1" align="left" bgcolor="lightskyblue">
                                            <tr>
                                                <td>
                                            <h4>{"📜 "}{c.text}</h4>
                                                </td>
                                            </tr>
                                            <h4>{"👽 "}{c.user.name}</h4>
                                            <h4>{"🗓️ "}{c.postedAt.substring(0, this.props.date.indexOf("T"))}</h4>

                                        </table>
                                   

                              
                               
                            ]);
                        }.bind(this))
                     // botão para fechar o popop
                }
                
                <form onSubmit = {this.MyCommentSub}> 
                    <input className="comment" type="text" value ={this.state.NewComment} onChange = {this.MyComment} placeholder="Write your comment..."/>
                </form>
                    <button onClick={this.popupClose}>❌</button>

                </div>
            </div>

        );
    }
}
export default Popup;