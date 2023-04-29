import React from 'react'
import '../css/About.css';

//COMPONENTS
import Header from './Header';
import Footer from './Footer';

export default function About() {
    return (
        <>
            <div className='about-me-section aboutme-inside'>
                <Header />
                <div className='d-flex flex-column'>
                    <span className='animation-aboutme'>About Me</span>

                    <div className="row justify-content-center about-box my-5">
                        {/* hon lezm zid about-box */}
                        {/* left side */}
                        <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                            shi sura
                        </div>

                        {/* rightside */}
                        <di0v className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
                            <span className='some-text-about-me'>
                                Software engineer blandjndj jend dnejdnjdndjndn nb hfbv  fjvfd dfv
                                bvnjvnjkjknv bjv dfvjfjbb vj nndfvdfb  f vb  vnf vndf n bnf nf f
                                gbnffd engineer blandjndj jend dnejdnjdndjndn nb hfbv  fjvfd dfv
                                dfjvdfnvdjhfvdfnv dhjvdv dfbjndnbvnjvnjkjknv bjv dfvjfjbb vj nndfvd
                                fb  f vb  vnf vndf n bnf nf fgbnffd engineer blandjndj jend dnej w heke
                            </span>

                            <span className='few-highlights'>
                                <span className='few-text'>
                                    Here are few highlights
                                </span>
                                <span className='few-list'>
                                    <ul>
                                        <li>frontend blabla</li>
                                        <li>React and Redux</li>
                                        <li>Django</li>
                                        <li>JavaScript, css, and html</li>
                                    </ul>
                                </span>
                            </span>
                        </di0v>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
