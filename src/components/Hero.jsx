import logo from "../assets/logo.svg";
const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} className='w-28 object-contain' alt="" />

                <button type="button" className="black_btn" onClick={() => window.open('')}>
                    Github
                </button>
            </nav>
            <h1 className="head_text">
                Summarize Article with <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span>

            </h1>
        </header>

    )
}

export default Hero