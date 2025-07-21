// import React from 'react'
// import Navbar from '../Components/Navbar/Navbar'

// import Footer from '../Components/Footer/Footer'

// import CreativeBlogs from "../Components/Blogs/CreativeBlogs";

// function Blogs() {
//   return (
//     <div>
//       <CreativeBlogs />
//     </div>
//   );
// }

// export default Blogs;

// import React from "react";
// import { useLocation } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../CSS/Styles.css";

// function Blogs() {

// //   return (
// //     <div className="container mt-5">
// //       <div className="card p-5">
// //         <img
// //           src={blog.authorPicture}
// //           alt={blog.authorTitle}
// //           className="rounded-circle mb-3"
// //           style={{ width: "50px", height: "50px" }}
// //         />
// //         <h3>{blog.authorTitle}</h3>
// //         <p>{blog.fullContent}</p>
// //       </div>
// //     </div>
// //   );
// // }

//   const { state: blog } = useLocation();

//   // if (!blog) {
//   //   return (
//   //     <div className="container mt-5">
//   //       <p>Blog not found.</p>
//   //     </div>
//   //   );
//   // }

//   // return (
//   //   <div className="container mt-5">
//   //     <div className="card p-5">
//   //       <img
//   //         src={blog.authorPicture || "https://via.placeholder.com/50"}  // Fallback to a default image
//   //         alt={blog.authorTitle}
//   //         className="rounded-circle mb-3"
//   //         style={{ width: "50px", height: "50px" }}  // Image styling
//   //       />
//   //       <h3>{blog.authorTitle}</h3>
//   //       <p>{blog.fullContent}</p>
//   //     </div>
//   //   </div>
//   return (
//         <div>
//           <CreativeBlogs />
//         </div>
//       );

// }

// export default Blogs;


import React from 'react';
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Styles.css";

// export default function Blogs() {
//   const location = useLocation();
//   const creativeblogs = location.state?.creativeblogs;

//   if (!creativeblogs) {
//     return <div className="container mt-5"><h2>blog not found!</h2></div>;
//   }

//   return (
//     <div className="container mt-5">
//       <div className="p-5 rounded shadow bg-clr-f">
//         <h2 className="text-info">{creativeblogs.title}</h2>
//         <p>{creativeblogs.description}</p>
//       </div>
//     </div>
//   );
// }
export default function Blogs() {
  const location = useLocation();
  const creativeblogs = location.state?.creativeblogs; // Access the correct state

  if (!creativeblogs) {
    return <div className="container mt-5"><h2>Blog not found!</h2></div>;
  }

  return (
    <div className="container mt-5">
      <div className="p-5 rounded shadow bg-clr-f">
        <h2 className="text-info">{creativeblogs.title}</h2>
        <p>{creativeblogs.description}</p>
      </div>
    </div>
  );
}