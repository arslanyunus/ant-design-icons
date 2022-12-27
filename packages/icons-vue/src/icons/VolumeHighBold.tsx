// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeHighBoldSvg from '@ant-design/icons-svg/lib/asn/VolumeHighBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeHighBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeHighBold: VolumeHighBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeHighBoldSvg}></AntdIcon>;
};

VolumeHighBold.displayName = 'VolumeHighBold';
VolumeHighBold.inheritAttrs = false;
export default VolumeHighBold;