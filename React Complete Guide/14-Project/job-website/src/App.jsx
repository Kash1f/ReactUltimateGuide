import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />

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

Ab HomeCards component me <Card/> display karo then is <Card/> me sab children elements like h1 and <a> pass karo aur doosra <Card/> bhi is tarhan display kardo. Also, Card has that bg-gray div and is taking place of that.

We dont have backend so we will be using JSON file to fetch jobs.

As we want to keep App.jsx clean. We will keep listings in its own component, and then we will have single listing component which will be this block. Display <JobListings/> in the App.jsx

Now we want the Job data from the JSON file and not hardcoded. 
We want to create a list, an array i.e basically jobs (json file me data array form me hai), we can loop through it and create a list using the map, so lets see where we need to do this. So we have the grid here, so we will create a list inside of the grid and in here we will create a list taht will have a div like this with the bg-white rounded xl around all the jobs just like we see here, same thing but we will use the actual job data from the json file.

Inside the map function, the jsx that we want is one of these divs, one of these boxes. yahan job listing 1 wali div select karo puri aur map function me daldo

*/
