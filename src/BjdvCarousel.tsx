import { ReactElement, createElement, useCallback, useState, useEffect, createRef } from "react";

import { BjdvCarouselContainerProps } from "../typings/BjdvCarouselProps";
import "./ui/BjdvCarousel.css";
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/lib/carousel'
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export function BjdvCarousel(props: BjdvCarouselContainerProps): ReactElement {
    const { onClickAction, dataSource, attribute, autoPlay, effect, dotPosition, widthValue, heightValue } = props;


    //[轮播图片]
    //样式
    const contentStyle: React.CSSProperties = {
        margin: 0,
        width: widthValue+'px',
        height: heightValue+'px',
        color: '#fff',
        textAlign: 'center'
    };
    //点击事件
    function onClickHandler(idx: number) {
        if (onClickAction) {
            const myAction = onClickAction.get(dataSource?.items[idx]);
            myAction.execute();
        }
    }
    //赋值
    const items = dataSource.items?.map((e) => {
        const obj = attribute?.get(e);
        return obj;
    })

    //[切换按钮]
    //样式
    const [displayStyle, setDisplayStyle] = useState('none');
    const rightButtonStyle: React.CSSProperties = {
        marginTop: '-'+heightValue/2+'px',
        right: '20px',
        display: displayStyle

    };
    const leftButtonStyle: React.CSSProperties = {
        marginTop: '-'+heightValue/2+'px',
        left: '20px',
        display: displayStyle
    };
    //点击事件
    const carRef = createRef<CarouselRef>();
    function next() {
        carRef.current?.next()
    }
    function prev() {
        carRef.current?.prev()
    }




    return (
        <div onMouseEnter={() => setDisplayStyle('block')} onMouseLeave={() => setDisplayStyle('none')}>
            <Carousel autoplay={autoPlay} effect={effect} dotPosition={dotPosition} ref={carRef} >
                {items?.map((e, index) =>
                    <div className="carousel-div" onClick={() => onClickHandler(index)} >
                        <img style={contentStyle} src={e.value} alt="" />
                    </div>
                )}
            </Carousel>
            <LeftOutlined style={leftButtonStyle} className="commonButton" onClick={() => prev()} />
            <RightOutlined style={rightButtonStyle} className="commonButton" onClick={() => next()} />
        </div>

    );
}
