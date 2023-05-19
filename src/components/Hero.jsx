import { logo } from "../assets";
const Hero = () => {
    return (
        <header className="flex flex-col items-center justify-center w-full">
            <nav className="flex items-center justify-between w-full pt-3 mb-10">
                <img src={logo} className='object-contain w-28' alt="" />

                <button type="button" className="black_btn" onClick={() => window.open('https://mathiasabdissa.github.io/')}>
                    Github
                </button>
            </nav>
            <h1 className="head_text">
                Summarize Article with <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span>

            </h1>
            <h2 className="desc">
                Simplify your reading with Summize, an open-source article summarizer
                that transforms lengthy articles into clear and concise summaries
            </h2>
        </header>
    )
}

export default Hero