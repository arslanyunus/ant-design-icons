// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element3OutlineSvg from '@ant-design/icons-svg/lib/asn/Element3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element3Outline: Element3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element3OutlineSvg}></AntdIcon>;
};

Element3Outline.displayName = 'Element3Outline';
Element3Outline.inheritAttrs = false;
export default Element3Outline;