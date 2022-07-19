import React, { useEffect, useState, useRef } from 'react';
import './main.scss';
import Slide from './Slide/Slide';

function Main() {
  const [imgId, setImgId] = useState(1);
  const interval = useRef();

  const onleftClick1 = () => {
    clearInterval(interval.current);
    imgId === 1 ? setImgId(imageData.length) : setImgId(prevId => prevId - 1);
  };

  const onrightClick1 = () => {
    clearInterval(interval.current);
    imgId === imageData.length ? setImgId(1) : setImgId(prevId => prevId + 1);
  };

  useEffect(() => {
    const cycleImage = () => {
      imgId === imageData.length ? setImgId(1) : setImgId(prevId => prevId + 1);
    };

    interval.current = setInterval(cycleImage, 4000);
    return () => {
      clearInterval(interval.current);
    };
  }, [imgId]);

  return (
    <section className="main" id="home">
      <div className="mainSliderContainer">
        {imageData.map(image => {
          return (
            <Slide
              key={image.id}
              id={image.id}
              url={image.url}
              subTitle={image.subTitle}
              Title1={image.Title1}
              Title2={image.Title2}
              imgId={imgId}
            />
          );
        })}
        <div className="mainSliderRightArrow" onClick={onrightClick1}>
          <i className="bx bx-chevron-right" />
        </div>
        <div className="mainSliderLeftArrow" onClick={onleftClick1}>
          <i className="bx bx-chevron-left" />
        </div>
      </div>
      <div className="mainContainer">
        <div className="upperMargin">
          <div className="mainBestList">
            <div className="bestListTitleContainer">
              <div className="bestListTitle">BEST</div>
              <a href="#home" className="bestListLink">
                + SHOP
              </a>
            </div>
            <ul className="bestListProductRecommend">
              <li className="bestListProduct">
                <div>컴포넌트</div>
              </li>
              <li className="bestListProduct">
                <div>컴포넌트</div>
              </li>
              <li className="bestListProduct">
                <div>컴포넌트</div>
              </li>
            </ul>
          </div>
          <div className="mainBestList">
            <div className="bestListTitleContainer">
              <div className="bestListTitle">NEW</div>
              <a href="#home" className="bestListLink">
                + SHOP
              </a>
            </div>
            <ul className="bestListProductRecommend">
              <li className="bestListProduct">
                <div>컴포넌트</div>
              </li>
              <li className="bestListProduct">
                <div>컴포넌트</div>
              </li>
              <li className="bestListProduct">
                <div>컴포넌트</div>
              </li>
              <li className="bestListProduct">
                <div>컴포넌트</div>
              </li>
            </ul>
          </div>
          <div className="mainBannerContainer">
            <img src="./images/coffee1.jpg" alt="coffee" />
            <ul className="mainBannerSection">
              {bannerCardData.map(data => {
                return (
                  <li className="mainBannerCard" key={data.id}>
                    <div className="cardTitle">{data.Title}</div>
                    <div className="cardSubTitle">{data.subTitle}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mainBottomLink">
            <ul className="mainBottomContainer">
              <li>
                <a href="#home">
                  <img
                    src="https://terarosa.com/SkinImg/main_bt_01.jpg"
                    alt="icon1"
                  />
                </a>
              </li>
              <li>
                <a href="#home">
                  <img
                    src="https://terarosa.com/SkinImg/main_bt_02.jpg"
                    alt="icon2"
                  />
                </a>
              </li>
              <li>
                <a href="#home">
                  <img
                    src="https://terarosa.com/SkinImg/main_bt_03.jpg"
                    alt="icon3"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const imageData = [
  {
    id: 1,
    url: '../images/silde/ethiopia1.jpg',
    subTitle: '에티오피아 예가체페 첼베사',
    Title1: 'Ethiopia',
    Title2: 'Yirgacheffe Chelbesa',
  },
  {
    id: 2,
    url: '../images/silde/indonesia.jpg',
    subTitle: '인도네시아 COE 3위 판탄 무사라',
    Title1: '2021 Indonesia',
    Title2: 'C.O.E Winner',
  },
  {
    id: 3,
    url: '../images/silde/colombia1.jpg',
    subTitle: '콜롬비아 호세 플로레즈',
    Title1: 'Colombia',
    Title2: 'Jose Florez',
  },
  {
    id: 4,
    url: '../images/silde/ethiopia2.jpg',
    subTitle: '에티오피아 구지 함벨라',
    Title1: 'Ethiopia',
    Title2: 'Guji Hambela',
  },
];

const bannerCardData = [
  { id: 1, Title: 'DRIP BAG', subTitle: '드립백' },
  { id: 2, Title: 'DELI', subTitle: '식품' },
  { id: 3, Title: 'GREEN BEAN', subTitle: '생두' },
  { id: 4, Title: 'SUBSCRIPTION', subTitle: '정기배송' },
];

export default Main;
