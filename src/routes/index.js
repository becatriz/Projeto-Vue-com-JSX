import Home from "../views/store";
import Contact from "../views/contact";
import About from "../views/about";

const routes = [
  {
    path: "/",
    name: "store",
    component: Home,
  },
  {
    path: "/contato",
    name: "contact",
    component: Contact,
  },
  {
    path: "/sobre",
    name: "about",
    component: About,
  },
];

export default routes;
