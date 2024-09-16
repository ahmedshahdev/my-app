import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Welcome to Our Blogging Hub
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Explore a world of insightful articles, tips, and resources to
            elevate your blogging journey. Whether you're a beginner or a pro,
            we've got something for everyone.
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Blogs"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* PRICING SECTION */}
      <section class="flex flex-wrap justify-center gap-5 p-5 mt-24">
        <div class="flex-1 min-w-[300px] border border-gray-300 rounded-lg p-5 text-center shadow-md">
          <h2 class="text-xl font-semibold">Basic Plan</h2>
          <p class="text-lg">$10/month</p>
          <hr class="my-4 border-gray-300" />
          <ul class="list-none p-0 text-sm">
            <li class="my-5">Basic Blogging Tools</li>
            <li class="my-5">5 GB Storage</li>
            <li class="my-5">Access to Basic Themes</li>
            <li class="my-5">Basic Analytics</li>
            <li class="my-2 line-through text-gray-400">Post Scheduling</li>
          </ul>
          <button class="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700">
            Choose Plan
          </button>
        </div>

        <div class="relative flex-1 min-w-[300px] border-2 border-yellow-500 rounded-lg p-5 text-center shadow-lg">
          <span class="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">
            Highlighted
          </span>
          <h2 class="text-xl font-semibold">Standard Plan</h2>
          <p class="text-lg">$20/month</p>
          <hr class="my-4 border-gray-300" />
          <ul class="list-none p-0 text-sm">
            <li class="my-5">Advanced Blogging Tools</li>
            <li class="my-5">20 GB Storage</li>
            <li class="my-5">Access to Premium Themes</li>
            <li class="my-5">Advanced Analytics</li>
            <li class="my-5">Post Scheduling</li>
          </ul>
          <button class="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700">
            Choose Plan
          </button>
        </div>

        <div class="flex-1 min-w-[300px] border border-gray-300 rounded-lg p-5 text-center shadow-md">
          <h2 class="text-xl font-semibold">Premium Plan</h2>
          <p class="text-lg">$30/month</p>
          <hr class="my-4 border-gray-300" />
          <ul class="list-none p-0 text-sm">
            <li class="my-5">All Blogging Features</li>
            <li class="my-5">Unlimited Storage</li>
            <li class="my-5">Custom Themes & Plugins</li>
            <li class="my-5">Detailed Analytics & SEO Tools</li>
            <li class="my-5">Post Scheduling</li>
          </ul>
          <button class="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700">
            Choose Plan
          </button>
        </div>
      </section>

      {/* CLIENT FEEDBACK SECTION */}
      <section class="p-5 mt-24">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold">What Our Users Say</h1>
          <p class="text-lg text-gray-600 mt-2">
            We love hearing feedback from our community! Here’s what some of our
            users have to say about their experience using our platform.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class=" p-5 rounded-lg shadow-md">
            <p class="">
              "This platform made blogging so much easier for me! The tools are
              intuitive, and the support is fantastic. Highly recommend to
              anyone looking to start a blog."
            </p>
            <div class="mt-4 text-right">
              <p class="text-lg font-semibold">- Sarah J.</p>
            </div>
          </div>
          <div class=" p-5 rounded-lg shadow-md">
            <p class="">
              "I’ve seen significant growth in my audience since using this
              platform. The analytics and SEO tools are game-changers for any
              blogger!"
            </p>
            <div class="mt-4 text-right">
              <p class="text-lg font-semibold">- Mark T.</p>
            </div>
          </div>
          <div class=" p-5 rounded-lg shadow-md">
            <p class="">
              "I love the customization options for themes. It allowed me to
              create a unique look for my blog that truly reflects my brand."
            </p>
            <div class="mt-4 text-right">
              <p class="text-lg font-semibold">- Emily W.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature blog section */}
      <section class="py-12 mt-24">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8 text-center">Top Blogs</h2>
          <div class="flex flex-col md:flex-row gap-8">
            <div class=" rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.pluralsight.com/content/dam/pluralsight2/siege-blog-assets/scrum-SAFe-thumbnail.png"
                alt="Blog 1"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Blog Title 1</h3>
                <p class=" mb-4">
                  A brief description of the first blog. This should be a short
                  and engaging summary to attract readers.
                </p>
                <a href="link-to-blog1" class="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            </div>

            <div class=" rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/legacy-header-images/header-blog-vcp-dcv.jpg"
                alt="Blog 2"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Blog Title 2</h3>
                <p class=" mb-4">
                  A brief description of the second blog. This should be a short
                  and engaging summary to attract readers.
                </p>
                <a href="link-to-blog2" class="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            </div>
            <div class=" rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.pluralsight.com/content/dam/pluralsight2/siege-blog-assets/user-story-thumbnail.png"
                alt="Blog 2"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Blog Title 2</h3>
                <p class=" mb-4">
                  A brief description of the second blog. This should be a short
                  and engaging summary to attract readers.
                </p>
                <a href="link-to-blog2" class="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
