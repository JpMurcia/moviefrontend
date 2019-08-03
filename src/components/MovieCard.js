import React from 'react';

class MovieCard extends React.Component {
 IMAGE_DEFAULT = "https://avatars0.githubusercontent.com/u/43051240?s=460&v=4";
 state = {}
 render() {
   const { image = this.IMAGE_DEFAULT, name } = this.props;
   return (
     <div>
       <img src={image}/>
       <h2>{name}</h2>
     </div>
   );
 }
}
export default MovieCard;