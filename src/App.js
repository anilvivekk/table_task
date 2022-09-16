import { useEffect, useState } from "react";
import AddList from "./AddList";
import "./App.css";

function App() {
  const data = [
    {
      id: 1,
      product: "Rice",
      price: 100,
    },
    {
      id: 2,
      product: "Wheat",
      price: 50,
    },
  ];

  const [list, setList] = useState(data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      total += Number(list[i].price);
    }
    setTotalPrice(total);
  }, [list]);

  const handleDelete = (id) => {
    const newList = list.filter((item) => id !== item.id);
    setList(newList);
  };

  return (
    <div className="App">
      <div>
        <AddList list={list} setList={setList} />
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td className="static">Total</td>
              <td className="static">{totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
