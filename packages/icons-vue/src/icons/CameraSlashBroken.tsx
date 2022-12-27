// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/CameraSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraSlashBroken: CameraSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraSlashBrokenSvg}></AntdIcon>;
};

CameraSlashBroken.displayName = 'CameraSlashBroken';
CameraSlashBroken.inheritAttrs = false;
export default CameraSlashBroken;