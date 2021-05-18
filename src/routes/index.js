import Home from "../views/home_";
import Contact from "../views/contact_";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/contato",
    name: "contato",
    component: Contact,
  },
];

export default routes;
