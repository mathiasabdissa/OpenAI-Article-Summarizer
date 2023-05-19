import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from "../assets";
const Demo = () => {
    const [article, setArticle] = useState({
        url: '',
        summa: ''
    })
    const handleSubmit = async (e) => {

    }
    return (
        <section className='mt-16 w-full max-w-xl'>
            <div className='flex flex-col w-full gap-2'>
                <form className='relative flex justify-center items-center' >
                    <img src={linkIcon} className='absolute left-0 my-2 ml-3 w-5' />
                    <input type='url' placeholder='Paste the article link' className='url_input peer' />
                    <button className='submit_btn peer'>
                        ↵
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Demo