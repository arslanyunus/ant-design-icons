// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsSlashBulkSvg from '@ant-design/icons-svg/lib/asn/GpsSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsSlashBulk: GpsSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsSlashBulkSvg}></AntdIcon>;
};

GpsSlashBulk.displayName = 'GpsSlashBulk';
GpsSlashBulk.inheritAttrs = false;
export default GpsSlashBulk;