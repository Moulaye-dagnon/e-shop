import { ShopItem } from "../Shop-item/ShopItem";

export function ShopPreview({ Collection }) {
  return (
    <div className="text-start">
      <h1 className="mb-10 text-4xl">{Collection.title}</h1>
      <div className="flex flex-wrap items-center justify-between">
        {Collection.items
          .filter((id, index) => index < 4)
          .map(({ id, ...othersProps }) => {
            return <ShopItem key={id} {...othersProps} />;
          })}
      </div>
    </div>
  );
}
