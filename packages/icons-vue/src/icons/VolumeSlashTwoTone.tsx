// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/VolumeSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeSlashTwoTone: VolumeSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeSlashTwoToneSvg}></AntdIcon>;
};

VolumeSlashTwoTone.displayName = 'VolumeSlashTwoTone';
VolumeSlashTwoTone.inheritAttrs = false;
export default VolumeSlashTwoTone;