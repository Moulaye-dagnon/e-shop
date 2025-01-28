import { useNavigate } from "react-router";

export function MenuItem({ title, ImgBackground, size, linkUrl }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(linkUrl)}
      className={`group flex ${size == "large" ? "h-80" : "h-64"} min-w-[49%] flex-auto cursor-pointer items-center justify-center overflow-hidden border border-gray-950 lg:min-w-[30%]`}
    >
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat transition duration-6000 ease-out hover:scale-125"
        style={{ backgroundImage: `url(${ImgBackground})` }}
      ></div>
      <div className="absolute flex flex-col items-center justify-center bg-slate-200/90 px-5 py-4 group-hover:opacity-50">
        <h1 className="mb-1 text-xl font-bold uppercase text-slate-800">
          {title}
        </h1>
        <span className="text-xl text-slate-800/80"> shop now</span>
      </div>
    </div>
  );
}
