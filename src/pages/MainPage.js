import React, { useState } from "react";
import { faXmark, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayInfo from "../DisplayInfo";

const MainPage = () => {
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    sku: "",
  });

  const [finalData, setFinalData] = useState({
    name: "",
    price: "",
    quantity: "",
    sku: "",
  });

  return (
    <div>
      <div className="h-20 flex items-center pl-4 shadow-md justify-between">
        <div>
          <div> Andoni Romano Prueba </div>
        </div>
        <div className="pr-4">
          <div
            onClick={(e) => {
              setView(!view);
            }}
            className="hover:text-blue-600 cursor-pointer"
          >
            <FontAwesomeIcon className="mr-2" icon={faPlusCircle} />
            Add Info
          </div>
        </div>
      </div>
      <div
        className={
          view ? "background-form w-full h-screen absolute" : "no-display"
        }
      ></div>
      <div
        className={
          view
            ? "w-screen h-screen absolute flex z-50 items-center justify-center"
            : "no-display"
        }
      >
        <div className="bg-white w-1/2 h-3/4 rounded-lg	">
          <div className="flex justify-end mr-4 mt-4 text-2xl">
            <FontAwesomeIcon
              onClick={(e) => {
                setView(!view);
              }}
              className="hover:text-red-600 hover:cursor-pointer"
              icon={faXmark}
            />
          </div>
          <div className="flex justify-center text-3xl mb-4 text-blue-500">
            Enter a new product
          </div>
          <div>
            <div className="flex justify-center">
              <input
                placeholder="Name"
                type="text"
                className="border-2 rounded-lg pl-2 height-padding w-1/2 m-2"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-center">
              <input
                placeholder="Price"
                type="text"
                className="border-2 rounded-lg pl-2 height-padding w-1/2 m-2"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-center">
              <input
                placeholder="Quantity"
                type="text"
                className="border-2 rounded-lg pl-2 height-padding w-1/2 m-2"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    quantity: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-center">
              <input
                placeholder="SKU"
                type="text"
                className="border-2 rounded-lg pl-2 height-padding w-1/2 m-2"
                value={formData.sku}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    sku: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  finalData.name = formData.name;
                  finalData.price = formData.price;
                  finalData.quantity = formData.quantity;
                  finalData.sku = formData.sku;
                  console.log(finalData);

                  setFormData({
                    name: "",
                    price: "",
                    quantity: "",
                    sku: "",
                  });
                }}
                className="bg-blue-500 text-white w-1/2 h-12 rounded-md hover:bg-blue-400"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <DisplayInfo formState={finalData} />
    </div>
  );
};

export default MainPage;
