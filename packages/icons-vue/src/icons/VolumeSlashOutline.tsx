// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/VolumeSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeSlashOutline: VolumeSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeSlashOutlineSvg}></AntdIcon>;
};

VolumeSlashOutline.displayName = 'VolumeSlashOutline';
VolumeSlashOutline.inheritAttrs = false;
export default VolumeSlashOutline;