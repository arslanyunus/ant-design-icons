// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element2BrokenSvg from '@ant-design/icons-svg/lib/asn/Element2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element2Broken: Element2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element2BrokenSvg}></AntdIcon>;
};

Element2Broken.displayName = 'Element2Broken';
Element2Broken.inheritAttrs = false;
export default Element2Broken;