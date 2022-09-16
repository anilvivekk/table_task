import React, { useRef } from 'react'

export default function AddList({ list, setList }) {

    const productRef = useRef();
    const priceRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const product = e.target.elements.product.value;
        const price = e.target.elements.price.value;
        const newList = {
            id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
            product,
            price
        }
        setList((prevList)=>{
            return prevList.concat(newList);
        })
        productRef.current.value = "";
        priceRef.current.value = "";
    }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <input type='text' name='product' placeholder='Enter Product Name' ref={productRef} />
        <input type='text' name='price' placeholder='Enter Price' ref={priceRef}/>
        <button type='submit'>Add</button>
    </form>
  )
}
