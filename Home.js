import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

import Header from '../components/Header';
import Mynft from '../components/myNFT';
 
const Home = () => {
  const history = useHistory();

  const handleGoToDemo = () =>{
    history.push("/demo")
  }

  return (
    <div className='Home'>
      <div className="Heading">
        <Header />
        <h1 className="Heading-Text">Track And Monitor Your NFT</h1>
            <Mynft />
            <Button onClick={handleGoToDemo} className="Btn-demo" color="light">How It Works</Button>
      </div>
    </div>
  )
}
  
export default Home; 