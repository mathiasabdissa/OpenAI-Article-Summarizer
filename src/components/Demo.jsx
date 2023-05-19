import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from "../assets";

import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
    const [article, setArticle] = useState({
        url: '',
        summary: '',
    });
    const [copied, setCopied] = useState("");
    const [allArticles, setAllArticles] = useState([]);

    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem("articles")
        );

        if (articlesFromLocalStorage) {
            setAllArticles(article);
        }
    }, []);

    //RTK lazy query
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await getSummary({ articleUrl: article.url });

        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };

            const updatedAllArticles = [newArticle, ...allArticles];

            setArticle(newArticle);
            setAllArticles(updatedAllArticles);


            setArticle(newArticle);
            console.log(newArticle);
        }
    }

    const handleCopy = (copyUrl) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        setTimeout(() => setCopied(fasle), 3000);
    }
    return (
        <section className='w-full max-w-xl mt-16'>
            <div className='flex flex-col w-full gap-2'>
                <form className='relative flex items-center justify-center' onSubmit={handleSubmit}>
                    <img src={linkIcon} className='absolute left-0 w-5 my-2 ml-3' />
                    <input type='url' placeholder='Paste the article link' className='url_input peer'
                        onChange={(e) => setArticle({ ...article, url: e.target.value })} value={article.url} required />
                    <button type="submit" className='submit_btn peer'>
                        ↵
                    </button>
                </form>
                {/* Browse URL History */}
                <div className='flex '>
                    {allArticles.reverse().map((item, index) => (
                        <div key={`link-${index}`} onClick={() => setArticle(item)} className='link_card'>
                            <div className='copy_btn' onClick={() => handleCopy(item.url)}>
                                <img
                                    src={copied === item.url ? tick : copy}
                                    alt={copied === item.url ? "tick_icon" : "copy_icon"}
                                    className='w-[40%] h-[40%] object-contain'
                                />
                            </div>
                            <p className='flex-1 text-sm font-medium text-blue-700 truncate font-satoshi'>{item.url}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Display Result */}
            <div className='flex items-center justify-center max-w-full my-10'>
                {isFetching ? (
                    <img src={loader} alt='loader' className='object-contain w-20 h-20' />
                ) : error ? (
                    <p className='font-bold text-center text-black font-inter'>
                        Well, that wasn't supposed to happen...
                        <br />
                        <span className='font-normal text-gray-700 font-satoshi'>
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-xl font-bold text-gray-600 font-satoshi'>
                                Article <span className='blue_gradient'>Summary</span>
                            </h2>
                            <div className='summary_box'>
                                <p className='text-sm font-medium text-gray-700 font-inter'>
                                    {article.summary}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default Demo