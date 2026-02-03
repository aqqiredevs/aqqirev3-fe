// import { article } from "@/types/news";
// import NewsCarousel from "./NewsCarousel";

// function getArticles(): Promise<article[]> {
//   return new Promise((resolve) => {
//     resolve([
//       {
//         title: "AI Revolution: How GPT-5 is Changing the Future of Work",
//         link: "https://example.com/ai-revolution-gpt5",
//         description:
//           "An in-depth look at how GPT-5 is transforming industries, from customer support to creative writing.",
//       },
//       {
//         title: "Top 10 Emerging Tech Trends in 2025",
//         link: "https://example.com/tech-trends-2025",
//         description:
//           "A comprehensive guide to the biggest technological trends shaping the world in 2025.",
//       },
//       {
//         title: "The Rise of Sustainable Energy Solutions",
//         link: "https://example.com/sustainable-energy",
//         description:
//           "Exploring innovative renewable energy solutions driving sustainability and reducing carbon footprints.",
//       },
//       {
//         title: "How Remote Work is Redefining Productivity",
//         link: "https://example.com/remote-work-productivity",
//         description:
//           "An analysis of remote work culture and how it has redefined workplace efficiency.",
//       },
//       {
//         title: "Cybersecurity in the Age of AI",
//         link: "https://example.com/cybersecurity-ai",
//         description:
//           "Understanding the risks and opportunities of artificial intelligence in cybersecurity.",
//       },
//       {
//         title: "Space Exploration: What’s Next After Mars?",
//         link: "https://example.com/space-exploration-2025",
//         description:
//           "A look at the next frontier in space exploration and the missions planned beyond Mars.",
//       },
//       {
//         title: "The Future of Healthcare: AI, Wearables, and Data",
//         link: "https://example.com/future-healthcare",
//         description:
//           "How digital health technologies are revolutionizing patient care and medical research.",
//       },
//       {
//         title: "Blockchain Beyond Cryptocurrency",
//         link: "https://example.com/blockchain-beyond-crypto",
//         description:
//           "Exploring real-world applications of blockchain technology outside of finance.",
//       },
//       {
//         title: "Climate Change: Innovative Solutions for a Global Crisis",
//         link: "https://example.com/climate-change-solutions",
//         description:
//           "Highlighting new strategies and technologies aimed at combating climate change.",
//       },
//       {
//         title: "Quantum Computing: Unlocking the Next Era of Innovation",
//         link: "https://example.com/quantum-computing-innovation",
//         description:
//           "An introduction to quantum computing and its potential to revolutionize industries.",
//       },
//       {
//         title: "Quantum Computing: Unlocking the Next Era of Innovation",
//         link: "https://example.com/quantum-computing-innovation",
//         description:
//           "An introduction to quantum computing and its potential to revolutionize industries.",
//       },
//     ]);
//   });
// }

// const News = async () => {
//   const articles: article[] = await getArticles();
//   return (
//     <section className=" p-4  bg-primary">
//       <div className="container mx-auto">
//         <div className="my-6 md:my-16 space-y-2">
//           <h2 className="text-white text-center text-3xl font-semibold">
//             This Week in Commercial Real Estate
//           </h2>
//           <p className="text-white text-center text-sm md:text-xl font-light">
//             Market shifts, major listings, and headlines shaping the CRE
//             landscape.
//           </p>
//         </div>
//         <NewsCarousel articles={articles} />
//       </div>
//     </section>
//   );
// };

// export default News;
