// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsSlashBoldSvg from '@ant-design/icons-svg/lib/asn/GpsSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsSlashBold: GpsSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsSlashBoldSvg}></AntdIcon>;
};

GpsSlashBold.displayName = 'GpsSlashBold';
GpsSlashBold.inheritAttrs = false;
export default GpsSlashBold;