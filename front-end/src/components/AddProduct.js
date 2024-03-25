import React from "react";

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');

    const addProduct = () =>{
        console.warn(name, price, category, company);
    }

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input type="text" placeholder="Enter Product Name:" className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <input type="text" placeholder="Enter Product Price:" className="inputBox" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
      <input type="text" placeholder="Enter Product Category:" className="inputBox" value={category} onChange={(e)=>{setCategory(e.target.value)}} />
      <input type="text" placeholder="Enter Product Company:" className="inputBox" value={company} onChange={(e)=>{setCompany(e.target.value)}} />
      <button onClick={addProduct} className="appButton">Add Product</button>
    </div>
  );
};

export default AddProduct;