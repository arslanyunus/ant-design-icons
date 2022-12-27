// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask1OutlineSvg from '@ant-design/icons-svg/lib/asn/Mask1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask1Outline: Mask1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask1OutlineSvg}></AntdIcon>;
};

Mask1Outline.displayName = 'Mask1Outline';
Mask1Outline.inheritAttrs = false;
export default Mask1Outline;