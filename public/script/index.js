//
//  import {createRoot} from 'react-dom/client';
//
class HeaderComponent extends React.Component {
    render() {
        return (
            <Header />
        )
    }
}



function Header() {
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
}

    const toggleHandler = (event) => {
         if (event.detail === 0) {
             const {key, keyCode} = event;
             if (keyCode === 32 || keyCode === 13) {
                //console.log("space/enter pressed");
                 const menuOptions = document.getElementById("menu-options");
                 menuOptions.classList.toggle("hidden");
             }
         } else {
             const menuOptions = document.getElementById("menu-options");
             menuOptions.classList.toggle("hidden");
         }

    };
    React.useEffect(() => {
        const hamburger = document.getElementById("hamburger");
        hamburger.addEventListener('mouseup', toggleHandler);
        return () => {
            hamburger.removeEventListener('mouseup', toggleHandler);
        };
    }, [toggleHandler]);
    React.useEffect(() => {
        const hamburger = document.getElementById("hamburger");
        hamburger.addEventListener('keyup', toggleHandler);
        return () => {
            hamburger.removeEventListener('keyup', toggleHandler);
        };
    }, [toggleHandler]);
    React.useEffect(() => {
        window.addEventListener('load', function(){
            if (window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.getElementById("theme-switcher").checked = true;
                console.log("prefers dark");
            } else {
                document.getElementById("theme-switcher").checked = false;
                console.log("prefers light");
                changeMode();
            }
        });
    }, []);
    React.useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change',({ matches }) => {
            if (matches) {
                console.log("change to dark mode!");
                document.getElementById("theme-switcher").checked = true;
                changeMode();
            } else {
                console.log("change to light mode!");
                document.getElementById("theme-switcher").checked = false;
                changeMode();
            }
        });
    }, []);

    function changeMode() {
        let html_tag = document.getElementById("html-tag")
        let box = document.getElementById("theme-switcher");
        if (box.checked) {
            if (!html_tag.classList.contains("dark")) {
                html_tag.classList.add("dark");
                html_tag.classList.add("bg-black");
                console.log("dark");
            } else {
                console.log("not dark");
            }
        }
        if (!box.checked) {
            if (html_tag.classList.contains("dark")) {
                html_tag.classList.remove("dark");
                console.log("light");
            } else {
                console.log("not light");
            }
        }
    }


    return (
        <div>
        <div className="navbar bg-[#003f88] dark:bg-[#fdc500] rounded-lg my-12 py-2 px-8 shadow-xl shadow-black/50 dark:shadow-yellow-500/50 flex justify-between lg:flex-none">
            {/*hamburger*/}
            <label id="hamburger" className="btn btn-circle border-white dark:border-black swap swap-rotate lg:hidden bg-transparent hover:bg-white dark:hover:bg-black hover:border-white dark:hover:border-black group">
                <input type="checkbox" />
                <svg className="swap-off fill-white dark:fill-black group-hover:fill-black dark:group-hover:fill-white fill-opacity-1 bg-transparent stroke-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                     viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                </svg>
                <div  className="swap-on dropdown dropdown-open">
                    <svg className="fill-white dark:fill-black group-hover:fill-black dark:group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         viewBox="0 0 512 512">
                        <polygon
                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
                    </svg>
                    <ul  id="menu-options" tabIndex="0"
                        className="menu dropdown-content z-50 p-2 ml-0 shadow bg-[#003f88] dark:bg-[#fdc500] text-[#fdc500] dark:text-[#003f88] rounded-box w-36 mt-4 hidden">
                        <li><a
                            className="hover:text-[#003f88] dark:hover:text-[#fdc500] hover:bg-[#fdc500] dark:hover:bg-[#003f88]" href={"../courses/"}>Courses</a>
                        </li>
                        <li><a
                            className="hover:text-[#003f88] dark:hover:text-[#fdc500] hover:bg-[#fdc500] dark:hover:bg-[#003f88]" href={"../projects/"}>Projects</a>
                        </li>
                        <li><a
                            className="hover:text-[#003f88] dark:hover:text-[#fdc500] hover:bg-[#fdc500] dark:hover:bg-[#003f88]" href={"../skills/"}>Skills</a>
                        </li>
                        <li><a
                            className="hover:text-[#003f88] dark:hover:text-[#fdc500] hover:bg-[#fdc500] dark:hover:bg-[#003f88]" href={"../files/resume.pdf"}>Resume</a>
                        </li>
                        <li><a
                            className="hover:text-[#003f88] dark:hover:text-[#fdc500] hover:bg-[#fdc500] dark:hover:bg-[#003f88]" href={"../home/#foot"}>Links</a>
                        </li>
                        <li><a
                            className="hover:text-[#003f88] dark:hover:text-[#fdc500] hover:bg-[#fdc500] dark:hover:bg-[#003f88]" href={"https://github.com/Aravind142857/Aravind142857.github.io"}>Code</a>
                        </li>
                    </ul>
                </div>

            </label>
            {/*logo*/}
            <div className="w-auto h-auto m-2">
                <a href={"../home/"}
                   className="group flex flex-shrink-0 btn bg-transparent border-none hover:bg-transparent w-auto h-auto p-0">
                    <img className="w-6 h-6 bg-transparent group-hover:shadow-lg group-hover:shadow-[#fdc500]/50 scale-[1.75] hover:scale-150 lg:scale-100 lg:hover:scale-110"
                         src={"../images/tile000.png"} alt={"Home Page"}></img>
                </a>
            </div>
            {/*links*/}
            <div className="w-full m-2 items-center justify-center font-urbanist hidden lg:flex">
                <a className="btn btn-outline w-auto mx-2 btn-nav dark:btn-nav-dark" href={"../courses/"}>
                    Courses
                </a>
                <a className="btn btn-outline w-auto mx-2 btn-nav dark:btn-nav-dark" href={"../projects/"}>
                    Projects
                </a>
                <a className="btn btn-outline w-auto mx-2 btn-nav dark:btn-nav-dark" href={"../skills/"}>
                    Skills
                </a>
                <a className="btn btn-outline w-auto mx-2 btn-nav dark:btn-nav-dark" href={"../files/resume.pdf"}>
                    Resume
                </a>
                <a className="btn btn-outline w-auto mx-2 btn-nav dark:btn-nav-dark" href={"../home/#foot"}>
                    Links
                </a>
                <a className="btn btn-outline w-auto mx-2 btn-nav dark:btn-nav-dark" href={"https://github.com/Aravind142857/Aravind142857.github.io"}>
                    Code
                </a>
            </div>

            {/*light/dark theme switcher*/}
            <label className="swap swap-rotate">

                {/*this hidden checkbox controls the state*/}
                <input id="theme-switcher" type="checkbox" onClick={changeMode}/>

                {/*sun icon*/}
                <svg id="sun" className="swap-on fill-black w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                </svg>

                {/*moon icon*/}
                <svg id="moon" className="swap-off fill-white w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                </svg>

            </label>
        </div>
        </div>
    );
}

class FooterComponent extends React.Component {
    render() {
        return (
            <Footer />
        )
    }
}
function Footer() {
    return (
        <div>
            <hr className="h-1 mt-16"></hr>
            <footer className="footer p-10 bg-transparent text-neutral-content dark:text-white font-bodoni_moda">
                <div className="w-full text-center h-full">
                    <h1 className="text-2xl w-full text-center flex justify-center items-center h-full text-black dark:text-white">Contact
                        me @</h1>
                </div>
                <div>
                    <span className="footer-title text-black dark:text-white dark:opacity-75">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        {/*InstagramLogo*/}
                        <a href="https://www.instagram.com/aravind_02_10" className="group">
                            <svg className="scale-125 group-hover:scale-150" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" height="24" width="24"
                                 viewBox="-19.5036 -32.49725 169.0312 194.9835">
                                <defs>
                                    <radialGradient fy="578.088" fx="158.429"
                                                    gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.399 454.004)"
                                                    gradientUnits="userSpaceOnUse" xlinkHref="#a" r="65" cy="578.088"
                                                    cx="158.429" id="c"/>
                                    <radialGradient fy="473.455" fx="147.694"
                                                    gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.351 -458.493)"
                                                    gradientUnits="userSpaceOnUse" xlinkHref="#b" r="65" cy="473.455"
                                                    cx="147.694" id="d"/>
                                    <linearGradient id="b">
                                        <stop stopColor="#3771c8" offset="0"/>
                                        <stop offset=".128" stopColor="#3771c8"/>
                                        <stop stopOpacity="0" stopColor="#60f" offset="1"/>
                                    </linearGradient>
                                    <linearGradient id="a">
                                        <stop stopColor="#fd5" offset="0"/>
                                        <stop stopColor="#fd5" offset=".1"/>
                                        <stop stopColor="#ff543e" offset=".5"/>
                                        <stop stopColor="#c837ab" offset="1"/>
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
                                    fill="url(#c)"/>
                                <path
                                    d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
                                    fill="url(#d)"/>
                                <path
                                    d="M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 105.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
                                    fill="#fff"/>
                            </svg>
                        </a>
                        {/*GitHub logo*/}
                        <a href="https://github.com/Aravind142857" className="group">
                            <svg className="fill-black dark:fill-white group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        {/*LinkedIn Logo*/}
                        <a href="https://www.linkedin.com/in/aravindsrinivasan02" className="group">
                            <svg className="fill-[#0077b5] group-hover:scale-110" height="24" width="24"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 455 455" xmlSpace="preserve">
                                <g>
                                    <path style={{fillRule:"evenodd", clipRule:"evenodd"}}
                                          d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"/>
                                    <path style={{fillRule:"evenodd",clipRule:"evenodd"}} d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
             M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
            c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
            c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
            c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
            z"/>
                                </g>
                            </svg>
                        </a>
                        {/*Gmail logo*/}
                    </div>
                    <span className="footer-title text-black dark:text-white dark:opacity-75">Mail</span>
                    <div className="grid grid-flow-col gap-4 text-black dark:text-white opacity-50 dark:opacity-75 group">
                        {/* href="mailto:aravind.s2002@gmail.com"> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="dark:fill-white group-hover:scale-110"
                             xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 256 256"
                             xmlSpace="preserve">

                            <defs>
                            </defs>
                            <g className="fill-black dark:fill-white"
                               style={{stroke: "none", strokeWidth: 0, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fillRule: "nonzero", opacity: 1}}
                               transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                <path
                                    d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z"
                                    style={{stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fillRule: "nonzero", opacity: 1}}
                                    transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                                <path
                                    d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z"
                                    style={{stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fillRule: "nonzero", opacity: 1}}
                                    transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                                <path
                                    d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z"
                                    style={{stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fillRule: "nonzero", opacity: 1}}
                                    transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                                <path
                                    d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z"
                                    style={{stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fillRule: "nonzero", opacity: 1}}
                                    transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                                <path
                                    d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z"
                                    style={{stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fillRule: "nonzero", opacity: 1}}
                                    transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                            </g>
                        </svg>
                        {/* <div className="flex flex-col "> */}
                        <a href="mailto:aravind.s2002@gmail.com">
                            <h1 className="font-bold text-current selection:bg-yellow-700 selection:text-white">aravind@aravinds.me</h1>
                        </a> 
                        <a href="mailto:aravind@aravinds.me">
                            <h1 className="font-bold text-current selection:bg-yellow-700 selection:text-white">aravind.s2002@gmail.com</h1>
                        </a>
                    </div>
                    
                </div>
            </footer>
        </div>
    )
}
// const footRoot = createRoot(document.getElementById("foot"));
// const headRoot = createRoot(document.getElementById("head"));
ReactDOM.render(<FooterComponent />, document.getElementById("foot"));
ReactDOM.render(<HeaderComponent />, document.getElementById("head"));