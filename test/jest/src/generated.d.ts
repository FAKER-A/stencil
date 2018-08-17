/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import { JSXElements } from '@stencil/core';




declare namespace StencilComponents {

  interface ElementCmp {}
  interface ElementCmpAttributes extends JSXElements.HTMLAttributes {}

  interface EventCmp {
    'emitEvent': () => void;
    'fireEventWithOptions': () => void;
  }
  interface EventCmpAttributes extends JSXElements.HTMLAttributes {
    'onMy-event-with-options'?: (event: CustomEvent<{ mph: number }>) => void;
    'onMyEvent'?: (event: CustomEvent<boolean>) => void;
  }

  interface ListenCmp {
    'opened': boolean;
  }
  interface ListenCmpAttributes extends JSXElements.HTMLAttributes {
    'opened'?: boolean;
  }

  interface PropCmp {
    'first': string;
    'lastName': string;
  }
  interface PropCmpAttributes extends JSXElements.HTMLAttributes {
    'first'?: string;
    'lastName'?: string;
  }

  interface StateCmp {}
  interface StateCmpAttributes extends JSXElements.HTMLAttributes {}
}

export interface LocalIntrinsicElements {
  'element-cmp': StencilComponents.ElementCmpAttributes;
  'event-cmp': StencilComponents.EventCmpAttributes;
  'listen-cmp': StencilComponents.ListenCmpAttributes;
  'prop-cmp': StencilComponents.PropCmpAttributes;
  'state-cmp': StencilComponents.StateCmpAttributes;
}

declare global {

  interface HTMLElementCmpElement extends StencilComponents.ElementCmp, HTMLStencilElement {}
  var HTMLElementCmpElement: {
    prototype: HTMLElementCmpElement;
    new (): HTMLElementCmpElement;
  };

  interface HTMLEventCmpElement extends StencilComponents.EventCmp, HTMLStencilElement {}
  var HTMLEventCmpElement: {
    prototype: HTMLEventCmpElement;
    new (): HTMLEventCmpElement;
  };

  interface HTMLListenCmpElement extends StencilComponents.ListenCmp, HTMLStencilElement {}
  var HTMLListenCmpElement: {
    prototype: HTMLListenCmpElement;
    new (): HTMLListenCmpElement;
  };

  interface HTMLPropCmpElement extends StencilComponents.PropCmp, HTMLStencilElement {}
  var HTMLPropCmpElement: {
    prototype: HTMLPropCmpElement;
    new (): HTMLPropCmpElement;
  };

  interface HTMLStateCmpElement extends StencilComponents.StateCmp, HTMLStencilElement {}
  var HTMLStateCmpElement: {
    prototype: HTMLStateCmpElement;
    new (): HTMLStateCmpElement;
  };

  interface HTMLElementTagNameMap {
    'element-cmp': HTMLElementCmpElement
    'event-cmp': HTMLEventCmpElement
    'listen-cmp': HTMLListenCmpElement
    'prop-cmp': HTMLPropCmpElement
    'state-cmp': HTMLStateCmpElement
  }

  interface ElementTagNameMap {
    'element-cmp': HTMLElementCmpElement;
    'event-cmp': HTMLEventCmpElement;
    'listen-cmp': HTMLListenCmpElement;
    'prop-cmp': HTMLPropCmpElement;
    'state-cmp': HTMLStateCmpElement;
  }
}


import { DefaultIntrinsicElements } from '@stencil/core';

declare global {
  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends LocalIntrinsicElements, DefaultIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends JSXElements.HTMLAttributes {}
}

