// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask3LinearSvg from '@ant-design/icons-svg/lib/asn/Mask3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask3Linear: Mask3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask3LinearSvg}></AntdIcon>;
};

Mask3Linear.displayName = 'Mask3Linear';
Mask3Linear.inheritAttrs = false;
export default Mask3Linear;