import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-green-400">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest"
          >
            Mohammed
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white"
            className="inflex-flex items-center px-6 px-3 my-6 rounded text-green-200 hover:text-red-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inflex-flex items-center px-6 px-3 my-6 rounded text-green-200 hover:text-red-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inflex-flex items-center px-6 px-3 my-6 rounded text-green-200 hover:text-red-800"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/mohammed-irfaan-hoosain-09a9b51a/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/styphoiz"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/styphoiz"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitch.tv/styphoiz"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
