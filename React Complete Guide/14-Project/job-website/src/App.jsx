import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
      <HomeCards/>
      
      


     
      

      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing 1 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Full-Time</div>
                  <h3 className="text-xl font-bold">Senior React Developer</h3>
                </div>

                <div className="mb-5">
                  We are seeking a talented Front-End Developer to join our team
                  in Boston, MA. The ideal candidate will have strong skills in
                  HTML, CSS, and JavaScript...
                </div>

                <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Boston, MA
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Job Listing 2 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Remote</div>
                  <h3 className="text-xl font-bold">
                    Front-End Engineer (React)
                  </h3>
                </div>

                <div className="mb-5">
                  Join our team as a Front-End Developer in sunny Miami, FL. We
                  are looking for a motivated individual with a passion...
                </div>

                <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Miami, FL
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Job Listing 3 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Remote</div>
                  <h3 className="text-xl font-bold">React.js Developer</h3>
                </div>

                <div className="mb-5">
                  Are you passionate about front-end development? Join our team
                  in vibrant Brooklyn, NY, and work on exciting projects that
                  make a difference...
                </div>

                <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Brooklyn, NY
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;

{
  /* <div classNameName='text-3xl bg-blue-500 text-red-500 font-bold text-center'> App
    </div>
    <p>Hello World</p>
    <ul>
  {names.map((name, index) => (
    <li key={index}>{name}</li>
  ))}
    </ul>
    {loggedIn ? <p>Logged In</p> : <p>Not Logged In</p>}
    */
}



/*
1. Navbar
2. Hero
3. Keep the app file clean and make a separate home cards component
<HomeCards>
    <Card1>
    <Card2>
</HomeCards>

So this has its own component called HomeCards but I wanna have each one of these to be separate card components so we can wrap the content in, so whatever the content we wrap will have this background color and I also want to pass in that background color as a prop or pass in the class as a prop.

In the Card component, it will take in {children} props, so children props are what we use for whatever we wrap, so if we pass in like an <h1> 
into the card component, we wrap the card or wrap the <h1> in the card component then this({children}) would be that h1. Matlab agar component me h1 as a prop send kiya to ye h1 children prop keh laiga.

Ab HomeCards component me <Card/> display karo then is <Card/> me sab children elements like h1 and <a> pass karo aur doosra <Card/> bhi is tarhan display kardo. Also, Card has that bg-gray div and is taking place of that


*/