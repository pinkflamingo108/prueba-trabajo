import "./App.css";
import React, { useState, useEffect } from "react";

function DisplayInfo() {
  const [data, setData] = useState([]);
  const [resName, setResName] = useState([]);

  const token = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ`;

  function getData() {
    fetch(`https://eshop-deve.herokuapp.com/api/v2/orders`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((info) => {
        setData(info.orders);

        data.map((res) => {
          resName.push({
            name: res.name,
            status: false,
          });
        });
      });
  }

  useEffect(() => {
    getData();
  }, [resName]);

  return (
    <div className="mt-6">
      <div>
        <div className="parent">
          {data.map((res, id) => {
            return (
              <div key={id}>
                <div className="border-2 p-2 rounded-lg w-40 h-46 flex items center flex-col child shadow-lg ">
                  <div>Name: {res.name}</div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      console.log(resName);
                    }}
                    className="bg-blue-500 rounded-md mt-2 mb-2 text-white hover:text-gray-100 hover:bg-blue-400 p-2"
                  >
                    View More
                  </button>
                  <div className={resName.status ? "display" : "no-display"}>
                    <div>Name Two: {res.items[0].name}</div>
                    <div>Price: {res.items[0].price}$</div>
                    <div>Quantity: {res.items[0].fulfillment.quantity}</div>
                    <div>Sku: {res.items[0].sku}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DisplayInfo;
