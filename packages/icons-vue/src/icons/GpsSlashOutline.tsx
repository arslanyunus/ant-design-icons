// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/GpsSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsSlashOutline: GpsSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsSlashOutlineSvg}></AntdIcon>;
};

GpsSlashOutline.displayName = 'GpsSlashOutline';
GpsSlashOutline.inheritAttrs = false;
export default GpsSlashOutline;