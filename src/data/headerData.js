import logo from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Inicio",
    href: "/",
    subNavItems: [
    ],
  },
  {
    id: 5,
    name: "Lugares turisticos",
    href: "/lugares-turisticos",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Eventos",
    href: "/eventos",
    subNavItems: [],
  },
  {
    id: 3,
    name: "Negocios locales",
    href: "/negocios",
    subNavItems: [],
  },
  {
    id: 4,
    name: "Articulos",
    href: "/articulos",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-at",
      content: "contacto@visitasancarlos.com.mx",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
