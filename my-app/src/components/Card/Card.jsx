// import foto from "../../Helpers/assets/cpp.png";
// import { Component } from "react";
import { useState } from "react";
import "./Card.scss";



          // Class Component:
// class Card extends Component {
//   constructor({ image, name, options}) {
//     super();
//     this.name = name;
//     this.image = image;
//     this.options = options;
//     this.state = {cardState : true};
//   }

//   render() {
//     return (
//       <main className= "foto-main" onClick={() => {
//           this.setState({cardState : this.state.cardState == true ? false : true});
//           (setTimeout(() => this.setState({cardState : true}), 3000));
//       } }>
//             {this.state.cardState ? (
//               <div>
//                   <div className="foto-div">
//                       <img className="image" src={this.image} alt="" />
//                   </div>

//                   <div className="text-div">
//                       <h3 className="name"> {this.name} </h3>
//                   </div>
//               </div>) : (

//                     <div className="info-card-div">
//                         {this.options.map((item, index) => {
//                           return (
//                         <li className="info-card-li" key={index} >
//                           {item}
//                         </li> )})}
//                     </div>
//               )}
//       </main>
//     );
//   }
// }





          /// Function Component:
  

const Card = ({ image, name, options }) => {
    
    const [cardState, setCardState] = useState(true);
  
    return (
      <main
        className="foto-main"
        onClick={() => {
          setCardState(!cardState);
          setTimeout(() => setCardState({ cardState: true }), 3000);}}>
        {cardState ? (
          <div>
            <div className="foto-div">
              <img className="image" src={image} alt="" />
            </div>

            <div className="text-div">
              <h3 className="name"> {name} </h3>
            </div>
          </div>) : (

          <div className="info-card-div">
            {options.map((item, index) => {
              return (
                <li className="info-card-li" key={index}>
                  {item}
                </li>
              );
            })}
          </div>
        )}
      </main>
    );
  }

export default Card;