// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element3LinearSvg from '@ant-design/icons-svg/lib/asn/Element3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element3Linear: Element3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element3LinearSvg}></AntdIcon>;
};

Element3Linear.displayName = 'Element3Linear';
Element3Linear.inheritAttrs = false;
export default Element3Linear;