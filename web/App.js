import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [emailId, setEmailId] = React.useState('');
  const [productId, setProductId] = React.useState('');
  const [res, setRes] = React.useState([]);
  const [isTrue, setIsTrue] = React.useState(false);
  const [isOrder, setIsOrder] = React.useState(false);
  const [itemList, setItemList] = React.useState([]);
  const [loading,setLoading] = React.useState(false);
  const [load, setLoad] = React.useState(false);

  const fetchData = () =>{
    setLoading(true);
  }

  const fetchSpin = () => {
    setLoad(true);
  }


  const handlePress = () => {
    fetchData();
    const options = {
      mode: 'no-cors',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'ApiX': '967f9e96a66d37eed3701049545af19677C66cce98f9fz03a482837a7418D576',
        'ApiY': '154T90d5188970d8cb2449d84c89Af44ea30703adbeef46f007P005decbc6fa4'
      },
      body: JSON.stringify({
        productId: productId,
        emailId: emailId
      })
    };

    /* fetch('http://dev.skill-edge.in/wp-json/api/v1/order', {
      //fetch('http://localhost/wordpress/wp-json/api/v1/order',{

      cache: 'no-cache',
      method: 'POST',
      headers: {
        'ApiX': '967f9e96a66d37eed3701049545af19677C66cce98f9fz03a482837a7418D576',
        'Content-Type': 'application/json',
        'ApiY': '154T90d5188970d8cb2449d84c89Af44ea30703adbeef46f007P005decbc6fa4'
      },
      body: JSON.stringify({
        productId: productId,
        emailId: emailId
      })
    }) */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setRes(responseJson)
        setIsTrue(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItemList(d);
    });
  };

  const handleOrder = () => {
    fetchSpin();
    //console.log(itemList);
    /* fetch('http://dev.skill-edge.in/wp-json/api/v1/order', {
      //fetch('http://localhost/wordpress/wp-json/api/v1/order',{

      cache: 'no-cache',
      method: 'POST',
      headers: {
        'ApiX': '967f9e96a66d37eed3701049545af19677C66cce98f9fz03a482837a7418D576',
        'Content-Type': 'application/json',
        'ApiY': '154T90d5188970d8cb2449d84c89Af44ea30703adbeef46f007P005decbc6fa4'
      },
      body: JSON.stringify(itemList)
    }) */
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setRes(responseJson)
        setIsOrder(true);
        setLoad(false);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  return (
    <div style={{ height: '80vh', display: "flex", alignItems: "flex-start", justifyContent: "center", marginTop: '20vh' }}>
      <div className="container ">
        <div className="row justify-content-evenly">
          <div className="col-1" />
          <div className="col-4 ">
            <div className="mb-5">
              <h2>Create Order </h2>
              <h3>by</h3>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Enter ProductId</label>
                <input onChange={e => setProductId(e.target.value)}
                  name="productId"
                  value={productId}
                  type="text" className="form-control" placeholder="Product Id" aria-label="Username" aria-describedby="addon-wrapping" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Enter EmailId</label>
                <input onChange={e => setEmailId(e.target.value)}
                  name="emailId"
                  value={emailId}
                  type="text" className="form-control" placeholder="Email Id" aria-label="Username" aria-describedby="addon-wrapping" />
              </div>
            </form>
            <button onClick={handlePress} type="button" style={{width:"150px"}} className="btn btn-primary" disabled={loading}>
              {loading && <i className="fa fa-circle-o-notch fa-spin"></i>}
               Submit</button>
            <div className="flex-nowrap my-3">

              {isTrue ? (
                <div className="h4">
                  {res.error == false ?
                    (
                      <>
                        <p className="text-success">
                          {`${res.message} for product`}
                        </p>
                        <p className="text-info">
                          {`${res.data.prod_title}(${productId})`}
                        </p>
                        <p className="text-dark">
                          {`by ${res.data.first_name} ${res.data.last_name}(${res.data.email})`}
                        </p>
                      </>
                    ) : (
                      <p className="text-danger">
                        {res.message}
                      </p>
                    )
                  }
                </div>
              ) : null}

            </div>
          </div>
          <div className="col-2" />
          <div className="col-4 ">
            <div className="mb-5">
              <h2>Create Order </h2>
              <h3>by</h3>
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">Upload XLSX File</label>
              <input className="form-control" type="file" id="formFile"
                onChange={(e) => {
                  const file = e.target.files[0];
                  readExcel(file);
                }} />
            </div>
            <button onClick={handleOrder} type="button" className="btn btn-primary">
              {load && <i className="fa fa-circle-o-notch fa-spin"></i>}
              Submit</button>
            <div className="flex-nowrap my-3">

              {isOrder ? (
                <div className="h4">
                  {res.error == false ?
                    (
                    <>
                      <p className="text-success">
                        {`${res.message} for product`}
                      </p>
                      <p className="text-info">
                        {`${res.data.prod_title}(${productId})`}
                      </p>
                      <p className="text-dark">
                        {`by ${res.data.first_name} ${res.data.last_name}(${res.data.email})`}
                      </p>
                    </>
                    ) : (
                      <p className="text-danger">
                        {res.message}
                      </p>
                    )
                  }
                </div>
                 

              ) : null}

            </div>
          </div>
          <div className="col-1" />
        </div>
      </div>
    </div>
  );
}

export default App;