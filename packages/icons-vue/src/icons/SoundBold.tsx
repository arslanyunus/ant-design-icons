// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SoundBoldSvg from '@ant-design/icons-svg/lib/asn/SoundBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SoundBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SoundBold: SoundBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundBoldSvg}></AntdIcon>;
};

SoundBold.displayName = 'SoundBold';
SoundBold.inheritAttrs = false;
export default SoundBold;