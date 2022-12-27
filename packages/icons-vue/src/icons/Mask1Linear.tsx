// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask1LinearSvg from '@ant-design/icons-svg/lib/asn/Mask1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask1Linear: Mask1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask1LinearSvg}></AntdIcon>;
};

Mask1Linear.displayName = 'Mask1Linear';
Mask1Linear.inheritAttrs = false;
export default Mask1Linear;