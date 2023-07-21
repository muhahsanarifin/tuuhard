"use client";

export const NoOder: React.FC<{}> = () => {
  return (
    <>
      <section className="p-1">
        <p className="text-sm">no.order: xxx1</p>
      </section>
    </>
  );
};

export const Item: React.FC<{}> = () => {
  return (
    <>
      <section className="p-1 border-solid border-2 rounded-lg">
        <p className="text-sm">items</p>
        <ul>
          {new Array(4).fill(0).map((_, idx) => (
            <li key={idx} className="text-sm">-xxxx | 2pcs</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export const PriceTotal: React.FC<{}> = () => {
  return (
    <>
      <section className="p-1 border-solid border-2 rounded-lg">
        <p className="text-sm">price total</p>
        <h3 className="font-semibold">RP. 250.000</h3>
      </section>
    </>
  );
};

export const Paid: React.FC<{}> = () => {
  return (
    <>
      <section className="p-1 border-solid border-2 rounded-lg">
        <p className="text-sm">paid</p>
        <h3 className="font-semibold">RP. 250.000</h3>
      </section>
    </>
  );
};

export const Order: React.FC<{}> = () => {
  return (
    <>
      <ul className="grid grid-cols-5 gap-4">
        {new Array(15).fill(0).map((_, idx) => (
          <li
            key={idx}
            className="p-2 rounded-lg border-2 border-solid min-h-min"
          >
            <div>
              <NoOder />
            </div>
            <div className="flex gap-x-2">
              <div className="flex flex-col justify-between">
                <PriceTotal />
                <Paid />
              </div>
              <div className="flex-1">
                <Item />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
