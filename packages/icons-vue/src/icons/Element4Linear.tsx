// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element4LinearSvg from '@ant-design/icons-svg/lib/asn/Element4Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element4LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element4Linear: Element4LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element4LinearSvg}></AntdIcon>;
};

Element4Linear.displayName = 'Element4Linear';
Element4Linear.inheritAttrs = false;
export default Element4Linear;