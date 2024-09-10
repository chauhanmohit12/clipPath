import React from 'react'
import "./Home.css"
const Home = () => {

    let generateUrl = ()=>{
        let element1 = document.getElementById("home1")
        let element2 = document.getElementById("home2")
        let element3 = document.getElementById("homeInput1")
        let element4 = document.getElementById("homeInput2")

        element1.classList.add("hidden")
        element2.classList.remove("hidden")
        element2.value = "https://shorturl.at/qr7T3"
    }

    let copyUrl = ()=>{
        navigator.clipboard.writeText("https://shorturl.at/bleach")
        let element = document.getElementById("copybtn")
        element.innerHTML = "Copied!"
        setTimeout(()=>{
            element.innerHTML = "Copy Url"
        },3000)
    }


    return (
        <div className='homeContainer'>
            <div className='homeone ' id= "home1">
                <div className='homeHeading'>Paste the URL to be shortened</div>
                <div className='homeForm'>
                    <input className='homeInput' type='url' placeholder='Enter url here ' id = "homeInput1"/>
                    <button className='homeBtn' onClick={generateUrl}>Shorten URL</button>
                </div>
                <div className='homePassage'>CLipPath is a free tool to shorten URLs and generate short links URL shortener allows to create a shortened link making it easy to share</div>
            </div>
            <div className="hometwo hidden" id = "home2">
                <div className='homeHeading'>Your shortened URL</div>
                <div className='homePassage'>Copy the short link and share it in messages, texts, posts, websites and other locations.</div>
                <div className='homeForm'>
                    <input className='homeInput' contentEditable="false" value='https://shorturl.at/qr7T3' id = "homeInput2"/>
                    <button className='homeBtn' onClick={copyUrl} id = "copybtn">Copy URL</button>
                </div>
            </div>
            <br />
            <div className="passageHead">Simple and fast URL shortener!</div>
            <div className='homePassage'>ClipPath allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check how many clicks it received.</div>
            <br />
            <div className="passageHead">Shorten, share and track</div>
            <div className='homePassage'>Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with our click counter.</div>

        </div>
    )
}

export default Home