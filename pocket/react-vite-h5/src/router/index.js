import Home from "@/container/Home";
import Data from "@/container/Data";
import User from "@/container/User";
import Detail from "@/container/Detail";
import Login from "@/container/Login";
import Account from "@/container/Account";
import About from "@/container/About";
import UserInfo from "@/container/UserInfo";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/data",
    component: Data,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/account",
    component: Account,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/userinfo",
    component: UserInfo,
  },
];

export default routes;
