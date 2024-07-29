// src/App.js
import React from 'react';

import './press.css';
import VideoSlider from './videogallery.js';
import Card from './card';

const Press = () => {
  const videoData = [
    { title: 'Interview 1', url: 'https://www.youtube.com/embed/A1rSHTrUgm4?si=uonyBekiJ6kjdo7M',id:"A1rSHTrUgm4" },
    { title: 'Interview 2', url: "https://www.youtube.com/embed/_2Euo5doCd8?si=zA2NdK1VsJ3nCW01",id:"_2Euo5doCd8" },
    { title: 'Interview 3', url: "https://www.youtube.com/embed/yGrdhxck2Ag?si=ZqFcjuBOgWDPKMwe" ,id:"yGrdhxck2Ag" },
    { title: 'Interview 4', url: "https://www.youtube.com/embed/tjyBjglTJws?si=htXI4hauuxiCV9R4" ,id:"tjyBjglTJws"},
    { title: 'Interview 5', url: "https://www.youtube.com/embed/dLj4rYVRihc?si=HCiR1UEIV0FAYCh2" ,id:"dLj4rYVRihc" },
    // Add more video objects here
  ];
   const articles = [
    {
      title: "Deciphering the success of Tere Bin with director Siraj-ul-Haq",
      description: "Nine episodes in, the success of 7th Sky Entertainment’s Tere Bin, airing on the Geo TV Network, is irrefutable. Deciphering why the drama has been trending on YouTube from its very first episode can be considered a study into what clicks with the desi TV drama audience. What makes this one drama such a hit? What formula has it cracked,...",
      moreLink: "https://glossetc.com/deciphering-the-success-of-tere-bin-with-director-siraj-ul-haq/",
      imageUrl: "a1.jpg" // Replace with actual image path
    },
    {
      title: "Moomal Rano - A Tale of Jealousy, Woe and Romance",
      description: "Siraj-ul-Haq’s Moomal Rano is a story you may have heard and seen before – and that’s not really a bad thing. This aggressive adaptation of the popular folk-tale is a collocation of film-like style within the confines of realistic affluence. And of course, one will spot titbits of inspiration as well (again, that’s not really a bad thing). The screenplay by Zafar Mairaj re-dramatises ....",
      moreLink: "https://magtheweekly.com/detail/2423-moomal-rano-a-tale-of-jealousy-woe-and-romance#:~:text=Moomal%20and%20Rano%20are%20cousins,end%20up%20in%20obligated%20servitude",
      imageUrl: "a2.jpg" // Replace with actual image path
    },
    {
        title: "In Conversation with Tere Bin director SIRAJ UL HAQ",
        description: "Geo Television currently aired drama serial, Tere Bin has reached a new pinnacle of success with a tremendous response on social media. The drama’s first three episodes were on the top 3 trends on YouTube and each episode consistently completed over one million views within just an hour of its upload on YouTube. The mind-blowing chemistry of Yumna Zaidi and Wahaj Ali, the  ...",
        moreLink: "https://magtheweekly.com/detail/17763-in-conversation-with-tere-bin-director-siraj-ul-haq",
        imageUrl: "a3.jpg" // Replace with actual image path
      },
      {
        title: "PRIME TIME: BEHIND THE SCENES ON TV DRAMA SETS",
        description: "Seraj-ul-Haq, director of the currently on air hit 7th Sky Productions drama Tere Bin, describes how it was necessary for his set to look very, very grand.“The drama has a larger-than-life story and it was important that the audience got a sense of opulence when they saw it. For this reason, the drama has been shot by connecting five different homes.The hero goes...",
        moreLink: "https://www.dawn.com/news/1737742",
        imageUrl: "a4.png" // Replace with actual image path
      },
    // Add more articles as needed
  ];

  return (
    <div className="contain">
      <h1>Press</h1>
      <VideoSlider videos={videoData} />
      <header className="App-header">
        {articles.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            description={article.description}
            moreLink={article.moreLink}
            imageUrl={article.imageUrl}
          />
        ))}
      </header>
    </div>
  );
};

export default Press;
