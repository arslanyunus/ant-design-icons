// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize3LinearSvg from '@ant-design/icons-svg/lib/asn/Maximize3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize3Linear: Maximize3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize3LinearSvg}></AntdIcon>;
};

Maximize3Linear.displayName = 'Maximize3Linear';
Maximize3Linear.inheritAttrs = false;
export default Maximize3Linear;