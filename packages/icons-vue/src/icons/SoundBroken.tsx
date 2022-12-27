// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SoundBrokenSvg from '@ant-design/icons-svg/lib/asn/SoundBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SoundBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SoundBroken: SoundBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundBrokenSvg}></AntdIcon>;
};

SoundBroken.displayName = 'SoundBroken';
SoundBroken.inheritAttrs = false;
export default SoundBroken;