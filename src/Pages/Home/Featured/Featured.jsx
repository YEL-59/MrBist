import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <>
      <div className="featured-item bg-fixed text-white pt-8 my-20">
        <SectionTitle heading={"Featured item"} subheading={"Check it out"} />
        <div className="md:flex justify-center items-center bg-slate-500 opacity-65 py-24 px-36">
          <div>
            <img src={featuredimg} className="rounded-md" alt="" />
          </div>
          <div className="md:ml-10">
            <p>January 20, 2024</p>
            <p className="uppercase">Where can i get some ?</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quos
              repellendus harum? Explicabo, voluptatum delectus?
            </p>
            <button className="btn btn-outline mt-4 border-0 border-b-2">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
