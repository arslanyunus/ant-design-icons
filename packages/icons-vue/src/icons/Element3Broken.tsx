// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element3BrokenSvg from '@ant-design/icons-svg/lib/asn/Element3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element3Broken: Element3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element3BrokenSvg}></AntdIcon>;
};

Element3Broken.displayName = 'Element3Broken';
Element3Broken.inheritAttrs = false;
export default Element3Broken;