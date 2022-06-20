import Link from 'next/link';
import React from 'react';

interface LinkElement {
  name: string,
  link: string
}

const links: LinkElement[] = [

  {
    name: 'resume',
    link: '/resume.pdf',
  }, {
    name: 'projects',
    link: '/projects',
  }, {
    name: 'blog',
    link: 'https://blog.vybhavb.com',
  }];

const getLinks = () => {
  return links.map((link: LinkElement) => {
    return (
      <li className="inline-block hover:background" key={link.name}>
        <Link href={link.link}>
          <a className="text-base text-gray-400">{link.name}</a>
        </Link>
      </li>
    );
  });
};

const Navbar = (): JSX.Element => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden swap swap-rotate">
            <input type="checkbox" />

            <svg xmlns="http://www.w3.org/2000/svg" className="swap-off fill-current w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 4 6h16M4 12h16M 4 18h16"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="swap-on fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 4 6h16M4 12h16M 4 18h16"/>
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {getLinks()}
          </ul>
        </div>
        <Link href="/"><a className="btn btn-ghost normal-case text-2xl">vb</a></Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {getLinks()}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
