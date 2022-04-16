import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import './Header.css';


const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className=" py-3 shadow z-10 bg-white sticky top-0">
			<div className="mx-auto md:w-5/6 w-6/6 px-2 md:px-0">
				<nav className="flex items-center justify-between relative">
					<Link className="inline-block text-3xl" to="">
						Picman
					</Link>
					<ul
						className={`text-center rounded py-2 lg:py-0 bg-[#fff] lg:bg-inherit w-full lg:w-auto absolute duration-200 lg:static left-0 top-12 lg:flex lg:items-center lg:space-x-6 ${
							open ? "top-14" : "top-[-180px]"
						}`}
					>
						<li>
							<NavLink className={({isActive}) => (isActive ? "py-2 block lg:inline lg:hover:bg-inherit lg:bg-inherit bg-[#274035] lg:text-[#274035] text-white" : " py-2 block lg:inline hover:bg-[#FCF4E0] lg:hover:bg-inherit text-[#0000007a]")}
							
								to={"/"}
							>
								Home
							</NavLink>
						</li>
						<li>
                        <NavLink className={({isActive}) => (isActive ? "py-2 block lg:inline lg:hover:bg-inherit lg:bg-inherit bg-[#274035] lg:text-[#274035] text-white" : " py-2 block lg:inline hover:bg-[#FCF4E0] lg:hover:bg-inherit text-[#0000007a]")}
							
                            to={"/blogs"}
                        >
                            Blogs
                        </NavLink>
						</li>
						<li>
                        <NavLink className={({isActive}) => (isActive ? "py-2 block lg:inline lg:hover:bg-inherit lg:bg-inherit bg-[#274035] lg:text-[#274035] text-white" : " py-2 block lg:inline hover:bg-[#FCF4E0] lg:hover:bg-inherit text-[#0000007a]")}
							
                            to={"/about"}
                        >
                            About
                        </NavLink>
						</li>
					</ul>
                    <div>
						<Link className="btn py-2 block lg:inline "to={"/signin"}>
                            Signin
						</Link>
					</div>

					<button onClick={() => setOpen(!open)} className="lg:hidden text-3xl">
						{open ? <HiOutlineX /> : <HiMenu />}
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
