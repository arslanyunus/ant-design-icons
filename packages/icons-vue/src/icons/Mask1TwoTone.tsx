// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Mask1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask1TwoTone: Mask1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask1TwoToneSvg}></AntdIcon>;
};

Mask1TwoTone.displayName = 'Mask1TwoTone';
Mask1TwoTone.inheritAttrs = false;
export default Mask1TwoTone;