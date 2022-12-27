// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element2BoldSvg from '@ant-design/icons-svg/lib/asn/Element2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element2Bold: Element2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element2BoldSvg}></AntdIcon>;
};

Element2Bold.displayName = 'Element2Bold';
Element2Bold.inheritAttrs = false;
export default Element2Bold;