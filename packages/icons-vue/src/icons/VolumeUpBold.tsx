// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeUpBoldSvg from '@ant-design/icons-svg/lib/asn/VolumeUpBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeUpBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeUpBold: VolumeUpBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeUpBoldSvg}></AntdIcon>;
};

VolumeUpBold.displayName = 'VolumeUpBold';
VolumeUpBold.inheritAttrs = false;
export default VolumeUpBold;