import React, {useState, useEffect} from 'react';
import{Container, Row, Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios"

import './App.css';
import MyCard from "./Card"


const App = () => {

  const [details, setDetails] = useState({})
  
  const fetchDetails = async () => {
    const {data} = await Axios.get('https://randomuser.me/api/');
    const detailed = data.results[0];
    setDetails(detailed)
    console.log(detailed)
  }

  useEffect (() => {
    fetchDetails()
  }, [])


  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md = {4} className = "offset-md-4 mt-4">
          <MyCard details = {details}></MyCard>
        </Col>
      </Row>
    </Container>    
  );
}

export default App;
