"use client";

const Select: React.FC<{}> = ({}) => {
  const handleOption = (e: any) => {
    console.log("Result:", e.target.value);
  };

  return (
    <>
      <select
        className="ml-auto select select-ghost w-full max-w-xs"
        onChange={handleOption}
      >
        <option disabled selected>
          Pick the history order
        </option>
        {["Lates", "Oldest", "Paid", "Unpaid"].map((el, idx) => (
          <option key={idx} value={el.toLowerCase()}>
            {el}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
