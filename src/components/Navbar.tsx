import React,{useState} from 'react';

interface Props {
    //boolean to always open ddm (for presentation)
    forceOpen?: boolean;
    label?: string;
    withDivider?: boolean;
    icon?: JSX.Element;
    items: DDMItem[];
    withBackground?: boolean;
}

export interface DDMItem {
    icon?: JSX.Element;
    label: string;
    desc?: string;
    link?: string;
    extraClasses?: string;
}

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
//            <header className="text-gray-400 bg-gray-900 body-font">
//                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//                        <span className="ml-3 text-xl">vybhavb</span>
//                    </a>
//                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//
//                        <a className="mr-5 hover:text-white">First Link</a>
//                        <a className="mr-5 hover:text-white">Second Link</a>
//                        <a className="mr-5 hover:text-white">Third Link</a>
//                        <a className="mr-5 hover:text-white">Fourth Link</a>
//                    </nav>
//                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
//                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//                            <path d="M5 12h14M12 5l7 7-7 7"></path>
//                        </svg>
//                    </button>
//                </div>
//            </header>

    <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <a className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="./">vybhavb</a>
                </div>  
            </div>


        </div>
    </nav>
)
}
//
//
//               div className="flex md:hidden">
//                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" onClick={() =>{setIsOpen(!isOpen)}}aria-label="toggle menu">
//                        <span className="sr-only">Open main menu</span>
//                        <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
//                            <span aria-hidden className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? "rotate-45":"-translate-y-1.5"}`}></span>
//                            <span aria-hidden className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${isOpen ? "opacity-0":""}`}></span>
//                            <span aria-hidden className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${isOpen ? "-rotate-45":"translate-y-1.5"}`}></span>
//                        </div>
//                    </button>
//                </div>
//            <div className={`items-center ${!isOpen ? "block":"hidden"} md:ml-auto md:mr-auto flex flex-wrap item-center text-base justify-center`}>
//                <div className="flex flex-col md:flex-row md:mx-6">
//                    {props.items.map((x) => {
//                        return(
//                            <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href={x.link}>{x.label}</a>
//                        );
//                    })}
//                </div>
//            </div>
//export default DropDownMenu;
//const Navbar = () => {
//    return (
//        <nav className="flex bg-white flex-wrap items-center justify-between p-4">
//            <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
//                <a clasName="text-xl text-gray-800 font-semibold font-heading" href=".">
//                   vybhavb
//                </a>
//            </div>
//            <div className="block lg:hidden">
//                <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500" onClick={() => {setIsOpen(!isOpen)}}>
//                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                        <title>
//                            Menu
//                        </title>
//                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
//                        </path>
//                    </svg>
//                </button>
//            </div>
//            <div className={`navbar-menu ${isOpen ? "block":"hidden"} lg:order-1 lg:block w-full lg:w-2/5`}>
//                <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href=".">
//                    Home
//                </a>
//                <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
//                    Team
//                </a>
//                <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">
//                    Galery
//                </a>
//            </div>
//            <div className={`navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right`}>
//                <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
//                    Content
//                </a>
//                <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
//                    FAQ
//                </a>
//                <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">
//                    Contact
//                </a>
//            </div>
//        </nav>
//    );
//}
//
export default Navbar;
