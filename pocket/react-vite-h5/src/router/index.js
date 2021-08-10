// import Index from '../container/Index'
// import About from '../container/About'

// const routes = [
//   {
//     path: "/",
//     component: Index
//   },
//   {
//     path: "/about",
//     component: About
//   }
// ];

// export default routes

import Home from '../container/Home'
import Data from '../container/Data'
import User from '../container/User'

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/data",
    component: Data
  },
  {
    path: "/user",
    component: User
  }
];

export default routes