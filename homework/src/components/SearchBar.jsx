import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form class="form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
      class="form-group mx-sm-3 mb-2"
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button type="submit" class="btn btn-primary mb-2">Add</button>
    </form>
  );
}
