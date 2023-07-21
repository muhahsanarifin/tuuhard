const Select: React.FC<{}> = ({}) => {
  return (
    <>
      <select className="ml-auto select select-ghost w-full max-w-xs">
        <option disabled selected>
          Pick the history order
        </option>
        {["Lates", "Oldest", "Paid", "Unpaid"].map((el, idx) => (
          <option key={idx}>{el}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
