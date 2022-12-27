// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element4BoldSvg from '@ant-design/icons-svg/lib/asn/Element4Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element4BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element4Bold: Element4BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element4BoldSvg}></AntdIcon>;
};

Element4Bold.displayName = 'Element4Bold';
Element4Bold.inheritAttrs = false;
export default Element4Bold;