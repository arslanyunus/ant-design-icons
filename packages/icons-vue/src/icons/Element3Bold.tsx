// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element3BoldSvg from '@ant-design/icons-svg/lib/asn/Element3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element3Bold: Element3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element3BoldSvg}></AntdIcon>;
};

Element3Bold.displayName = 'Element3Bold';
Element3Bold.inheritAttrs = false;
export default Element3Bold;