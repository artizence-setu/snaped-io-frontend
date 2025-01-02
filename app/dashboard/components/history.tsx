const History = () => {
  const history = [
    {
      title: "The India Gate is a war memorial located near the ...",
      time: "Few Seconds ago",
    },
    {
      title: "The India Gate is a war memorial located near the ...",
      time: "Few Seconds ago",
    },
    {
      title: "The India Gate is a war memorial located near the ...",
      time: "Few Seconds ago",
    },
  ];
  return (
    <div>
      <h2 className="font-extralight mb-2 text-lg text-black/80">History</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {history.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow px-4 pt-4 pb-2 rounded-lg flex flex-col"
          >
            <p className="text-base font-extralight text-black/80">
              {item.title}
            </p>
            <p className="font-extralight text-black/50 text-sm">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
