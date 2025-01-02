import Link from "next/link";
import Logo from "../../../components/logo";
import {
  TbLayoutDashboard,
  TbBulb,
  TbVideoPlus,
  TbUpload,
  TbPhoto,
  TbCalendar,
} from "react-icons/tb";

const SideNavbar = () => {
  const navlinks = [
    {
      href: "/dashboard",
      name: "Dashboard",
      icon: TbLayoutDashboard,
    },
    {
      href: "ideas",
      name: "Explore Ideas",
      icon: TbBulb,
    },
    {
      href: "editor",
      name: "Video Editor",
      icon: TbVideoPlus,
    },
    {
      href: "/publish",
      name: "Publish",
      icon: TbUpload,
    },
    {
      href: "/myvideos",
      name: "My Videos",
      icon: TbPhoto,
    },
    {
      href: "/calender",
      name: "Calender",
      icon: TbCalendar,
    },
  ];
  return (
    <div className="hidden fixed top-0 left-0 w-64 border-r bg-background h-screen border-2 shadow lg:flex flex-col py-6">
      <Logo />
      <nav className="flex flex-col items-start mt-12 w-full">
        {navlinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center px-4 py-2 text-lg w-full hover:bg-blue-100 transition-all group dark:hover:bg-gray-900"
          >
            <item.icon className="mr-3 size-6 text-foreground/70 hover:bg-custom-gradient bg-clip-text text-gradient" />
            <span className="text-foreground/70 bg-foreground/70 group-hover:bg-custom-gradient bg-clip-text textfil text-gradient transition-all">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNavbar;

/*

         .btn-grad {background-image: linear-gradient(to right, #4568DC 0%, #B06AB3  51%, #4568DC  100%)}
         .btn-grad {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
/*color: #fff;
            text-decoration: none;
}*/
