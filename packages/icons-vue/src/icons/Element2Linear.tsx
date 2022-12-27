// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element2LinearSvg from '@ant-design/icons-svg/lib/asn/Element2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element2Linear: Element2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element2LinearSvg}></AntdIcon>;
};

Element2Linear.displayName = 'Element2Linear';
Element2Linear.inheritAttrs = false;
export default Element2Linear;