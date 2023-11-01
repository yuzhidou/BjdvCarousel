/**
 * This file was generated from BjdvCarousel.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListActionValue, ListAttributeValue } from "mendix";

export type EffectEnum = "scrollx" | "fade";

export type DotPositionEnum = "top" | "bottom" | "left" | "right";

export interface BjdvCarouselContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dataSource?: ListValue;
    attribute?: ListAttributeValue<string>;
    widthValue: number;
    heightValue: number;
    autoPlay: boolean;
    effect: EffectEnum;
    dotPosition: DotPositionEnum;
    onClickAction?: ListActionValue;
}

export interface BjdvCarouselPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dataSource: {} | { caption: string } | { type: string } | null;
    attribute: string;
    widthValue: number | null;
    heightValue: number | null;
    autoPlay: boolean;
    effect: EffectEnum;
    dotPosition: DotPositionEnum;
    onClickAction: {} | null;
}
