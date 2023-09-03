import React from 'react'

function Navbar() {
  return (
    <>
        {/* <!-- Main navigation container --> */}
<nav
  className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4 "
  data-te-navbar-ref>
  <div className="flex w-full flex-wrap items-center justify-between px-3 gap-10">
    <div className="ml-2">
      <a className="text-xl text-neutral-800 dark:text-neutral-200" href="/"
        >amazon</a
      >
    </div>
    {/* <!-- Hamburger button for mobile view --> */}
    <button
      className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent3"
      aria-controls="navbarSupportedContent3"
      aria-expanded="false"
      aria-label="Toggle navigation">
      {/* <!-- Hamburger icon --> */}
      <span className="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </button>

    {/* <!-- Collapsible navbar container --> */}
    <div
      className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
      id="navbarSupportedContent3"
      data-te-collapse-item>
      {/* <!-- Left links --> */}
      <div
        className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
        data-te-navbar-nav-ref>
        {/* <!-- Home link --> */}
        <div
          className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
          data-te-nav-item-ref>
          <a
            className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            aria-current="page"
            href="#"
            data-te-nav-link-ref
            >Delever to Ksa</a
          >
        </div>
        <div className="w-[300px] lg:pr-2">
        <div className="relative flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3" />

          {/* <!--Search button--> */}
          <button
            className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 motion-reduce:transition-none"
            type="button"
            id="button-addon3"
            data-te-ripple-init>
            Search
          </button>
        </div>
        </div>
      
        {/* <!-- Features link --> */}
        <div
          className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
          data-te-nav-item-ref>
          <a
            className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="/login"
            data-te-nav-link-ref
            >Sign in</a
          >
        </div>
        {/* <!-- Pricing link --> */}
        <div
          className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
          data-te-nav-item-ref>
          <a
            className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
            data-te-nav-link-ref
            >Returns & order</a
          >
        </div>
        <a
        className="mr-4 text-secondary-500 transition duration-200 hover:text-secondary-400 hover:ease-in-out focus:text-secondary-400 disabled:text-black/30 motion-reduce:transition-none"
        href="#">
        <span className="[&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5">
            <path
              d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </span>
      </a>
      </div>
    </div>
  </div>
</nav>
{/* <!-- Main navigation container --> */}
<nav
  className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <nav className="w-full rounded-md" aria-label="breadcrumb">
      <ol className="list-reset ml-2 flex">
        <li>
          <a
            href="#"
            className="text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200"
            >Todays deals</a
          >
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-200"
            >costumer service</span
          >
        </li>
        <li>
          <a
            href="#"
            className="text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200"
            >Rigestry</a
          >
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-200"
            >Gift cards</span
          >
        </li>
        <li>
          <a
            href="#"
            className="text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200"
            >Sell</a
          >
        </li>
      </ol>
    </nav>
  </div>
</nav>
    </>
  )
}

export default Navbar