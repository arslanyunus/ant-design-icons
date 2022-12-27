// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element4BrokenSvg from '@ant-design/icons-svg/lib/asn/Element4Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element4BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element4Broken: Element4BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element4BrokenSvg}></AntdIcon>;
};

Element4Broken.displayName = 'Element4Broken';
Element4Broken.inheritAttrs = false;
export default Element4Broken;