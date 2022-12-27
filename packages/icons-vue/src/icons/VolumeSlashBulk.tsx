// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeSlashBulkSvg from '@ant-design/icons-svg/lib/asn/VolumeSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeSlashBulk: VolumeSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeSlashBulkSvg}></AntdIcon>;
};

VolumeSlashBulk.displayName = 'VolumeSlashBulk';
VolumeSlashBulk.inheritAttrs = false;
export default VolumeSlashBulk;