function TopBar(){
    return (
        <div className="flex items-center pt-8 pb-8">
            <div className=" flex-grow text-custom-green text-2xl font-bold">
                MOHAMMED DANISH
            </div>
            <div className="flex justify-end text-white text-sm">
                <div className="pl-8"><a href=""><h2>ABOUT</h2></a> </div>
                <div className="pl-8"><a href=""><h2>SKILLS</h2></a></div>
            </div>  
        </div>
    )
}

function AfterTopBar(){
    return(
        <div className="flex">
            <div className="pt-16 pb-8">
            <div className="text-white text-4xl font-bold">
            <div className="pt-3">Hello,</div>
            <div className="pt-3">This is<a href="https://twitter.com/itzzdanish"> <span className="text-custom-pink">MOHAMMED DANISH</span></a>, </div>
            <div className="pt-3 pb-12  ">I'm a<span className="text-custom-green"> Software Developer</span>.</div>
        </div>

        <div className="text-xl text-custom-green pb-2">
            WHO I AM?
            </div>
            <div className="text-lg text-white">
            My name is MOHAMMED DANISH. I am enthusiastic
            programmer in my daily life. I am a quick learner with a self-
            learning attitude. I love to learn and explore new technologies
            and am passionate about problem-solving. I love almost all
            the stacks of web application development and love to make
            the web more open to the world. My core skill is based on
            JavaScript and I love to do most of the things using
            JavaScript. I am available for any kind of job opportunity that
            suits my skills and interests.
            </div>
            </div>
        </div>
    )
}
function SocialLinks(){
    return(
        <div>
<div className="flex w-10 h-10 mt-12">
            <a href="mailto:salmanidanish488@gmail.com"><img src="./gmail.svg"    className="" alt="" /></a><img src="./gmail.svg"    className="" alt="/" />
            <a href="https://www.linkedin.com/in/mohammed-danish-salmani-ab2586258/"><img src="./linkedin.svg" className="ml-8" alt="/" /></a>
            <a href="https://github.com/itzdanishsalmani/"><img src="./github.svg"   className="ml-8" alt="/" /></a>
            <a href="https://twitter.com/itzzdanish"><img src="./twitter.svg"  className="ml-8" alt="/" /></a>
        </div>
        
        <div className="w-fit text-white rounded-3xl text-sm mt-8 p-2 bg-custom-pink">
            <button><a href="">GET RESUME</a></button>
        </div>

        </div>
    )
}

function Skills(){
    return(
        <div>
            <div className="flex text-xl text-white justify-center pb-12 ">SKILLS</div>
            <div className="w-24 h-24 flex justify-between w-full mb-12 ">
                <a href="add a link from me main docc"></a><img src="/javascript.svg" alt="" />
                <a href="add a link from me main docc"></a><img src="/react.svg" alt="" />
                <a href="add a link from me main docc"></a><img src="/nodejs.svg" alt="" />
                <a href="add a link from me main docc"></a><img src="/mongodb.svg" alt="" />
                <a href="add a link from me main docc"></a><img src="/tailwind-css.svg" alt="" />
                </div>
                <div className="w-24 h-24 flex justify-between w-full">
                <a href="add a link"></a><img src="/html.svg" alt="" />
                <a href="add a link"></a><img src="/css.svg" alt="" />
                <a href="add a link"></a><img src="mysql.svg" alt="" />
                <a href="add a link"></a><img src="/git.svg" alt="" />
                <a href="add a link"></a><img src="/github.svg" alt="" />
                </div>
                <div className="flex text-white mt-16 items-center justify-center">
                ____________________________________________________________________________________________________________________________________________________
                </div>
            </div>
    )
}
function Footer(){
    return(
        <div className="text-white mt-12 text-center">
            © Developer Portfolio by <span className="text-custom-green"><a href="https://twitter.com/itzzdanish">Mohammed Danish</a></span>
        </div>
    )
}

export function LandingPage(){
    return (
        <div className="bg-blue-950 pl-24 pr-24 pb-12">
        <TopBar/>
        <AfterTopBar/>
        <SocialLinks/>
        <Skills/>
        <Footer/>
        </div>  
    )
}
