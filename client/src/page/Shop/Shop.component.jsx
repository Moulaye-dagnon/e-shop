import Data from "./shop.data.js";
import { ShopPreview } from "../../components/shop-preview/ShopPreview";
import axios from "axios";
export function ShopComponent() {
  return (
    <div className="py-10">
      <h1 className="pb-8 text-5xl max-md:text-center">Collection</h1>
      {Data.map((Collection) => {
        return <ShopPreview key={Collection.id} Collection={Collection} />;
      })}
    </div>
  );
}
