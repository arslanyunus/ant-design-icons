// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeUpBrokenSvg from '@ant-design/icons-svg/lib/asn/VolumeUpBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeUpBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeUpBroken: VolumeUpBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeUpBrokenSvg}></AntdIcon>;
};

VolumeUpBroken.displayName = 'VolumeUpBroken';
VolumeUpBroken.inheritAttrs = false;
export default VolumeUpBroken;