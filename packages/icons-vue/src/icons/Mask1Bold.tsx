// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask1BoldSvg from '@ant-design/icons-svg/lib/asn/Mask1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask1Bold: Mask1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask1BoldSvg}></AntdIcon>;
};

Mask1Bold.displayName = 'Mask1Bold';
Mask1Bold.inheritAttrs = false;
export default Mask1Bold;