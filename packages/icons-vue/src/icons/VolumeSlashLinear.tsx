// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeSlashLinearSvg from '@ant-design/icons-svg/lib/asn/VolumeSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeSlashLinear: VolumeSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeSlashLinearSvg}></AntdIcon>;
};

VolumeSlashLinear.displayName = 'VolumeSlashLinear';
VolumeSlashLinear.inheritAttrs = false;
export default VolumeSlashLinear;