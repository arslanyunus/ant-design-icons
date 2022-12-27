// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/VolumeSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeSlashBroken: VolumeSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeSlashBrokenSvg}></AntdIcon>;
};

VolumeSlashBroken.displayName = 'VolumeSlashBroken';
VolumeSlashBroken.inheritAttrs = false;
export default VolumeSlashBroken;