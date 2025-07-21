// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../../CSS/Styles.css'
// import { Link, useNavigate } from 'react-router-dom';
// function CreativeBlogs() {
//   return (
//     <>
//     <section className="blogs-section pt-5 pb-5 mt-5 mb-5">
//     <div className="container text-center mt-5 mb-5  ">
//     <h2 className="pt-5 pb-5 mt-5 mb-5">Creative <span className="text-info ">Blogs</span></h2>

//     <div className="blogs-wrapper">
//         <div className="row">
//         {[1, 2, 3, 4].map((item) => (
//             <div className="col-md-6 col-lg-6 mb-4 " key={item}>
//             <div className="blog-card rounded shadow feature-card bg-clr-f pt-5 pb-5">
//                 <div className="blog-image-placeholder"></div>
//                 <p className="blog-description">
//                 We are a creative web design agency who makes beautiful websites for thousands of peoples.
//                 </p>
//             </div>
//             </div>
//         ))}
//         </div>
//     </div>
//     </div>
// </section> 


// </>
//   )
// }

// export default CreativeBlogs

// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../CSS/Styles.css";

// function CreativeBlogs() {
//   const blogs = [
//     {
//       id: 1,
//       // authorPicture: "https://via.placeholder.com/50",
//       authorTitle: "Lorem Ipsum",
//       shortDescription:
//         "We are a creative web design agency who makes beautiful websites.",
//       fullContent:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     },
//     {
//       id: 2,
//       // authorPicture: "https://via.placeholder.com/50",
//       authorTitle: "Lorem Ipsum",
//       shortDescription: "Creating stunning digital experiences for businesses.",
//       fullContent:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Praesent feugiat neque at felis aliquam, vitae suscipit est cursus L. Nulla facilisi.",
//     },
//     {
//       id: 3,
//       // authorPicture: "https://via.placeholder.com/50",
//       authorTitle: "Lorem Ipsum",
//       shortDescription: "Specializing in modern and responsive web designs.",
//       fullContent:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Suspendisse potenti. Fusce in turpis in urna mollis varius. Sed ac nisl non libero ullamcorper aliquam.",
//     },
//     {
//       id: 4,
//       // authorPicture: "https://via.placeholder.com/50",
//       authorTitle: "Lorem Ipsum",
//       shortDescription: "Delivering creative solutions for your digital needs.",
//       fullContent:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Vestibulum luctus orci sit amet diam ultricies, non tempus turpis feugiat.",
//     },
//   ];

//   return (
//     <section className="blogs-section pt-5 pb-5 mt-5 mb-5">
//       <div className="container text-center mt-5 mb-5">
//         <h2 className="pt-5 pb-5 mt-5 mb-5">
//           Creative <span className="text-info">Blogs</span>
//         </h2>
//         <div className="blogs-wrapper">
//           <div className="row">
//             {blogs.map((blog) => (
//               <div className="col-md-6 col-lg-6 mb-4" key={blog.id}>
//                 <Link
//                   to={`/blog/${blog.id}`}
//                   state={blog}
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   <div className="blog-card rounded shadow feature-card bg-clr-f pt-5 pb-5">
//                   <img
//         src={blog.authorPicture || "https://via.placeholder.com/50"}  // Use a fallback image if authorPicture is not defined
//         alt={blog.authorTitle}
//         className="rounded-circle mb-3"
//         style={{ width: "50px", height: "50px" }}  // Add styles as needed
//       />
//                     <h5>{blog.authorTitle}</h5>
//                     <p className="blog-description">{blog.shortDescription}</p>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CreativeBlogs;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../CSS/Styles.css';

// Feature Card Component
const BlogCard = ({ title, description, onClick }) => (
  <div className="col-md-6">
    <div 
      className="p-4 rounded shadow feature-card bg-clr-f" 
      onClick={onClick} 
      style={{ cursor: 'pointer' }}
    >
      <h5 className="text-info">{title}</h5>
      <p id='blog-p'>{description}</p>
    </div>
  </div>
);

export default function CreativeBlogs() {
  const navigate = useNavigate();

  const creativeblogs = [
    { id: 1, title: 'Lorem', description: 'Provides a middle ground between changing the input text and keeping its meaning Rewrites text to match the unique description provided.' },
    { id: 2, title: 'Lorem', description: 'Rewrites text to match the unique description provided Rewrites text to match the unique description provided.' },
    { id: 3, title: 'Lorem', description: 'Rephrases text with the most inventiveness and expression Rewrites text to match the unique description provided.' },
    { id: 4, title: 'Lorem', description: 'Rewrites ideas in a more sophisticated and professional way Rewrites text to match the unique description provided.' },
  ];

  // const handleCardClick = (creativeblogs) => {
  //   navigate(`/creativeblogs/${creativeblogs.id}`, { state: { creativeblogs } });
  // };
  const handleCardClick = (creativeblogs) => {
    navigate(`/blog/${creativeblogs.id}`, { state: { creativeblogs } }); // Pass the correct object
  };
  return (
    <section className="blogs-section pt-2 pb-5 mt-4 mb-5">
      <div className="container">
        <div className=" pb-3  mb-4">
        <h2 className="pt-5 pb-5 mt-5 mb-5 text-center">Creative <span className="text-info ">Blogs</span></h2>
          {/* <Link to='/features' className="btn btn-outline-info btn-sm">See All Features →</Link> */}
        </div>
        <div className="row g-4">
          {creativeblogs.map((creativeblogs) => (
            <BlogCard 
              key={creativeblogs.id} 
              title={creativeblogs.title} 
              description={creativeblogs.description} 
              onClick={() => handleCardClick(creativeblogs)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

