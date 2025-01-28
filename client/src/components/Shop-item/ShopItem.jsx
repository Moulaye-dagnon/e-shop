export function ShopItem({ name, imageUrl, price }) {
  return (
    <div className="group h-96 min-w-full cursor-pointer sm:min-w-[49%] md:min-w-[23%]">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="relative h-[90%] w-full bg-cover bg-center bg-no-repeat hover:opacity-80"
      >
        <div className="absolute bottom-4 left-1/2 w-[80%] -translate-x-1/2 border border-slate-50/5 bg-slate-50/60 py-2 text-center text-lg uppercase opacity-0 hover:bg-slate-700 hover:text-slate-100 group-hover:opacity-100">
          Add to cart
        </div>
      </div>
      <div className="flex w-full items-center justify-between text-lg">
        <span className=" ">{name}</span>
        <span>$ {price}</span>
      </div>
    </div>
  );
}
