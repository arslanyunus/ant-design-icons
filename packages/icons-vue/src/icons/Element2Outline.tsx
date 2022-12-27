// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element2OutlineSvg from '@ant-design/icons-svg/lib/asn/Element2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element2Outline: Element2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element2OutlineSvg}></AntdIcon>;
};

Element2Outline.displayName = 'Element2Outline';
Element2Outline.inheritAttrs = false;
export default Element2Outline;