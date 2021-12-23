import './App.css';
import Photo from './profile/ProfilPhoto.js';
import Name from './profile/Name.js';
import React from 'react';


class  App extends React.Component {

  constructor(props){
    
    super(props);

  }

  render() {

      <>
    <Photo/>
    <Name/>
    </>

  );

    }


}

export default App;
