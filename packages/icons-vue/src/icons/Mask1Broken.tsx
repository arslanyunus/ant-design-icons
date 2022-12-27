// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask1BrokenSvg from '@ant-design/icons-svg/lib/asn/Mask1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask1Broken: Mask1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask1BrokenSvg}></AntdIcon>;
};

Mask1Broken.displayName = 'Mask1Broken';
Mask1Broken.inheritAttrs = false;
export default Mask1Broken;