import { MenuItem } from "../menu-item/menu-item";

export function DirectoryMenu() {
  const Items = [
    {
      id: 1,
      title: "Hats",
      ImgBackground: "./images/hats.png",
      size: "",
      linkUrl: "/hats",
    },
    {
      id: 2,
      title: "Jackets",
      ImgBackground: "./images/jackets.png",
      size: "",
      linkUrl: "jackets",
    },
    {
      id: 3,
      title: "Sneakers",
      ImgBackground: "./images/sneakers.png",
      size: "",
      linkUrl: "sneakers",
    },
    {
      id: 5,
      title: "Womens",
      ImgBackground: "./images/womens.png",
      size: "large",
      linkUrl: "womens",
    },
    {
      id: 4,
      title: "Men",
      ImgBackground: "./images/men.png",
      size: "large",
      linkUrl: "men",
    },
  ];
  return (
    <div className="w-100 flex flex-wrap items-center justify-between gap-4">
      {Items.map(({ id, ...othersProps }) => {
        return <MenuItem key={id} {...othersProps} />;
      })}
    </div>
  );
}
