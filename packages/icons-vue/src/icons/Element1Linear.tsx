// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element1LinearSvg from '@ant-design/icons-svg/lib/asn/Element1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element1Linear: Element1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element1LinearSvg}></AntdIcon>;
};

Element1Linear.displayName = 'Element1Linear';
Element1Linear.inheritAttrs = false;
export default Element1Linear;