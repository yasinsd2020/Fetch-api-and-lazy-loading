import React from "react";
import { useEffect } from "react";
import BookingId from "../BookingId/BookingId";

const n = 5;

export default function App() {
  return [...Array(n)].map(() => <span ><BookingId /></span>);
}