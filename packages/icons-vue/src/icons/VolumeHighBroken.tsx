// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeHighBrokenSvg from '@ant-design/icons-svg/lib/asn/VolumeHighBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeHighBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeHighBroken: VolumeHighBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeHighBrokenSvg}></AntdIcon>;
};

VolumeHighBroken.displayName = 'VolumeHighBroken';
VolumeHighBroken.inheritAttrs = false;
export default VolumeHighBroken;