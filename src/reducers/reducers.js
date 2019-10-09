import React from "react";
import * as actions from "../actions/actions";

const initialShopState = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
];

const initialCarState = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: []
};

export const carReducer = (car = initialCarState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.ADD_FEATURE:
      const newCar = {
        ...car,
        features: car.features.concat(payload),
        price: car.price + payload.price
      };
      return newCar;

    case actions.REMOVE_FEATURE:
      return car;

    default:
      return car;
  }
};

export const extraReducer = (state = { additionalPrice: 0 }, action) => {
  return state;
};

export const storeReducer = (state = initialShopState, action) => {
  return state;
};
