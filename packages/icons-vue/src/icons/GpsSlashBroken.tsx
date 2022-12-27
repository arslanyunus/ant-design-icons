// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/GpsSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsSlashBroken: GpsSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsSlashBrokenSvg}></AntdIcon>;
};

GpsSlashBroken.displayName = 'GpsSlashBroken';
GpsSlashBroken.inheritAttrs = false;
export default GpsSlashBroken;