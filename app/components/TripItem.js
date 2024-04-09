import React from "react";

export default function TripItem({ trip }) {
  return (
    <div key={trip.key}>
        <h2>{trip.title}</h2>
    </div>
  );
}
