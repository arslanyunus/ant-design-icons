// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element4OutlineSvg from '@ant-design/icons-svg/lib/asn/Element4Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element4OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element4Outline: Element4OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element4OutlineSvg}></AntdIcon>;
};

Element4Outline.displayName = 'Element4Outline';
Element4Outline.inheritAttrs = false;
export default Element4Outline;