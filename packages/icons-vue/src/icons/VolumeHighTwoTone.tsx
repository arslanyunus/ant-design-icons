// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeHighTwoToneSvg from '@ant-design/icons-svg/lib/asn/VolumeHighTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeHighTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeHighTwoTone: VolumeHighTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeHighTwoToneSvg}></AntdIcon>;
};

VolumeHighTwoTone.displayName = 'VolumeHighTwoTone';
VolumeHighTwoTone.inheritAttrs = false;
export default VolumeHighTwoTone;