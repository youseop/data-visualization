import React, { useState } from "react";

const FilterControls = () => {
  const [endYear, setEndYear] = useState(undefined);
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div>
      <label>
        End Year:
        <input
          type="text"
          value={endYear ?? currentYear}
          onChange={(e) => setEndYear(e.target.value)}
        />
      </label>
    </div>
  );
};

export default FilterControls;
