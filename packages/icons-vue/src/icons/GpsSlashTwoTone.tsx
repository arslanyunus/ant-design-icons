// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/GpsSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsSlashTwoTone: GpsSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsSlashTwoToneSvg}></AntdIcon>;
};

GpsSlashTwoTone.displayName = 'GpsSlashTwoTone';
GpsSlashTwoTone.inheritAttrs = false;
export default GpsSlashTwoTone;