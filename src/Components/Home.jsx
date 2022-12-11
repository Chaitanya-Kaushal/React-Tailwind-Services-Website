import React from "react";
import hero from "../assets/1.png";
import ani from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className=" bg-slate-900">
        <div
          className=" sm:rounded-b-[200px] uppercase  w-full  h-[50vh]   sm:h-screen flex flex-col  item-center md:items-end text-white justify-center"
          style={{ backgroundImage: `url('${hero}')` }} id="home"
        >
          <div className="mr-12" >
            <h2 className=" text-6xl md:text-8xl font-bold ">TechyStar</h2>
            <p className=" text-xl  sm:text-2xl font-bold">Solution to all your problems</p>
          </div>
        </div>

        <div  className="w-full h-screen flex flex-col justify-center items-center  ">
          <div className="flex flex-col md:flex-row items-center sm:w-[80%] mx-auto h-[50vh] sm:h-full">
            <img
              src={ani}
              className="w-[400px] animate-bounce z-10 "
              alt="animation" style={{
                animationDelay: "2s"}}
            />
            <p className="text-white text-2xl w-[80%] md:w-1/2  font-cursive">
              We are your one and only solution to the tech problems you face
              every day. We are leading tech company whose aim is to increase
              the problem solving ability in children.
            </p>
          </div>
        </div>

        <div id="about" className="w-full h-screen text-gray-700 mb-10">
          <div className=" md:h-[70%] lg:h-full lg:w-[70%] bg-white rounded-r-[200px]  flex flex-col  items-center p-16 lg:p-28">
            <h2 className="text-3xl font-semibold mb-12 underline  underline-offset-[16px] ">
              Who we are?
            </h2>
            <p className="text-xl font-cursive font-light sm:leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis officiis hic illo quos sit commodi, aut magnam odio
              eligendi? Totam quis officiis fugit sunt dolores nostrum tenetur
              iusto est odio mollitia. Dolor placeat repellendus officia
              aspernatur dolorum harum. Dolorem cumque quaerat eius qui deserunt
              ullam laudantium quia tempore. Dignissimos esse sequi numquam est
              ipsam nemo, voluptas vel recusandae iste aspernatur qui quasi,
              commodi, atque ipsa dolores tempore asperiores? Dolores soluta
              placeat molestiae aperiam, ullam officia fugiat corrupti odio,
              suscipit ipsum cum vel nemo. Ratione quo tempore fugit quaerat!
              Facilis beatae impedit similique maxime praesentium sunt unde
              necessitatibus voluptates ipsa, et, numquam reiciendis eveniet?
              Aliquid nemo nesciunt placeat, qui fuga quae repellat sunt, non
              natus, iure ab officia rem ipsa cum sed cumque corporis voluptate
              quibusdam nostrum quod saepe
            </p>
          </div>
        </div>

        <div id="brand" className="w-full h-screen flex flex-col justify-center md:items-end items-center">
          <div className="bg-[#5853ff] h-[70%] lg:w-[60%] w-full rounded-l-[200px] flex flex-col  items-center text-center">
            <div className="my-12">
              <h2 className=" mb-28 text-white text-3xl uppercase pb-2 border-b-4 inline-block">
                Brands
              </h2>
              <div className="flex flex-wrap justify-center md:justify-evenly">
                <div className="bg-white w-[150px] h-[150px] rounded-full flex flex-col justify-center items-center text-gray-700 animate-bounce mx-2" style={{
                animationDelay: "0.3s"}}>
                  <AiFillGoogleCircle className="text-[4rem]" />
                  <p className="font-cursive text-lg font-semibold ">Google</p>
                </div>
                <div className="bg-white w-[150px] h-[150px] rounded-full flex flex-col justify-center items-center text-gray-700 animate-bounce mx-2" style={{
                animationDelay: "0.5s"}}>
                  <AiFillYoutube className="text-[4rem]" />
                  <p className="font-cursive text-lg font-semibold ">Youtube</p>
                </div>
                <div className="bg-white w-[150px] h-[150px] rounded-full flex flex-col justify-center items-center text-gray-700 animate-bounce mx-2" style={{
                animationDelay: "0.7s"}}>
                  <AiFillAmazonCircle className="text-[4rem]" />
                  <p className="font-cursive text-lg font-semibold ">Amazone</p>
                </div>
                <div className="bg-white w-[150px] h-[150px] rounded-full flex flex-col justify-center items-center text-gray-700 animate-bounce mx-2" style={{
                animationDelay: "1s"}}>
                  <AiFillInstagram className="text-[4rem]" />
                  <p className="font-cursive text-lg font-semibold ">
                    Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
