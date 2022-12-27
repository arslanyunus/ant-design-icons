// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsSlashLinearSvg from '@ant-design/icons-svg/lib/asn/GpsSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsSlashLinear: GpsSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsSlashLinearSvg}></AntdIcon>;
};

GpsSlashLinear.displayName = 'GpsSlashLinear';
GpsSlashLinear.inheritAttrs = false;
export default GpsSlashLinear;