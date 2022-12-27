// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeUpTwoToneSvg from '@ant-design/icons-svg/lib/asn/VolumeUpTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeUpTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeUpTwoTone: VolumeUpTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeUpTwoToneSvg}></AntdIcon>;
};

VolumeUpTwoTone.displayName = 'VolumeUpTwoTone';
VolumeUpTwoTone.inheritAttrs = false;
export default VolumeUpTwoTone;