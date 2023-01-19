import "./App.css";
import React, { useState, useEffect } from "react";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayInfo({ formState }) {
  const [data, setData] = useState([]);
  const [currentState, setCurrentState] = useState(false);

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
      });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    data.forEach((res) => {
      res.activeStatus = false;
    });
  }, [data]);

  useEffect(() => {
    if (formState.name.length) {
      // console.log([formState]);
      setData([
        ...data,
        {
          name: formState.name,
          price: formState.price,
          quantity: formState.quantity,
          sku: formState.sku,
          status: formState.status,
        },
      ]);

      console.log("worked");
    }
  }, [formState.status]);

  return (
    <div className="mt-6">
      <div>
        <div className="parent">
          {data.map((res, id) => {
            return (
              <div className="m-2" key={id}>
                <div className="border-2 shadow-lg rounded-lg w-40 h-46">
                  <div>
                    <FontAwesomeIcon
                      onClick={(e) => {
                        e.preventDefault();
                        if (res.name) {
                          res.activeStatus = !res.activeStatus;
                        }
                        setCurrentState(!currentState);
                      }}
                      className={
                        res.activeStatus
                          ? "ml-2 hover:text-red-600 hover:cursor-pointer"
                          : "no-display"
                      }
                      icon={faXmark}
                    />
                  </div>
                  <div className="  flex items center flex-col child  ">
                    <div>Name: {res.name}</div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (res.name) {
                          res.activeStatus = !res.activeStatus;
                        }

                        setCurrentState(!currentState);
                      }}
                      className={
                        res.activeStatus
                          ? "no-display"
                          : "bg-blue-500 rounded-md mt-2 mb-2 text-white hover:text-gray-100 hover:bg-blue-400 p-2"
                      }
                    >
                      View More
                    </button>
                    <div
                      className={res.activeStatus ? "display" : "no-display"}
                    >
                      {/* <div>Name Two: {res.items[0].name}</div>
                      <div>Price: {res.items[0].price}$</div>
                      <div>Quantity: {res.items[0].fulfillment.quantity}</div>
                      <div>Sku: {res.items[0].sku}</div> */}
                    </div>
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
