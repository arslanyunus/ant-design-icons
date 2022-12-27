// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeSlashBoldSvg from '@ant-design/icons-svg/lib/asn/VolumeSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeSlashBold: VolumeSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeSlashBoldSvg}></AntdIcon>;
};

VolumeSlashBold.displayName = 'VolumeSlashBold';
VolumeSlashBold.inheritAttrs = false;
export default VolumeSlashBold;