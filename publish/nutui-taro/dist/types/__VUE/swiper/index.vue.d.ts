/// <reference types="node" />
import { ComponentPublicInstance, VNode } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    width: {
        type: (NumberConstructor | StringConstructor)[];
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    paginationVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationColor: {
        type: StringConstructor;
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    autoPlay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    initPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPreventDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    isStopPropagation: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    state: {
        active: number;
        num: number;
        rect: {
            height: number;
            width: number;
            x: number;
            y: number;
            readonly bottom: number;
            readonly left: number;
            readonly right: number;
            readonly top: number;
            toJSON: () => any;
        } | null;
        width: number;
        height: number;
        moving: boolean;
        offset: number;
        touchTime: number;
        autoplayTimer: {
            hasRef: () => boolean;
            refresh: () => NodeJS.Timeout;
            [Symbol.toPrimitive]: () => number;
            [Symbol.dispose]: () => void;
            ref: () => NodeJS.Timeout;
            unref: () => NodeJS.Timeout;
        } | null | undefined;
        children: ComponentPublicInstance[];
        childrenVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        style: {};
    };
    classesInner: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    classesPagination: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    container: import("vue").Ref<any>;
    activePagination: import("vue").ComputedRef<number>;
    onTouchStart: (e: TouchEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onTouchEnd: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: (NumberConstructor | StringConstructor)[];
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    paginationVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationColor: {
        type: StringConstructor;
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    autoPlay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    initPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPreventDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    isStopPropagation: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    duration: string | number;
    loop: boolean;
    direction: string;
    paginationVisible: boolean;
    paginationColor: string;
    autoPlay: string | number;
    initPage: string | number;
    touchable: boolean;
    isPreventDefault: boolean;
    isStopPropagation: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutSwiper: typeof _default;
  }
}