import React, {
  ComponentClass,
  FunctionComponent,
  RefAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';

export type LinkContainerProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    component: string | FunctionComponent | ComponentClass;
  };

export type LinkContainerRefAttributes = RefAttributes<
  HTMLButtonElement & HTMLAnchorElement
>;

export interface ILinkContainer
  extends FunctionComponent<LinkContainerProps & LinkContainerRefAttributes> {}
