const Card = ({ image, title, price, oldPrice, discount, rating }) => {
  return (
    <div>
      <div className="border rounded-lg shadow-md p-4 bg-white w-64">
        {discount && (
          <div className="absolute bg-[#48B4BB] text-white text-sm px-2 py-1 rounded-md">
            -{discount}%
          </div>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < rating ? (
                <span className="text-yellow-400">★</span>
              ) : (
                <span className="text-gray-300">★</span>
              )}
            </span>
          ))}
        </div>
        <div className="mt-2">
          <span className="text-xl font-bold">${price}</span>
          {oldPrice && (
            <span className="text-gray-500 line-through ml-2">${oldPrice}</span>
          )}
        </div>
        <button className="mt-3 w-full bg-[#48B4BB] text-white py-2 rounded-md hover:bg-white hover:text-[#48B4BB] hover:border border-[#48B4BB]">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
