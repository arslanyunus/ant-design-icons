// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SoundLinearSvg from '@ant-design/icons-svg/lib/asn/SoundLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SoundLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SoundLinear: SoundLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundLinearSvg}></AntdIcon>;
};

SoundLinear.displayName = 'SoundLinear';
SoundLinear.inheritAttrs = false;
export default SoundLinear;