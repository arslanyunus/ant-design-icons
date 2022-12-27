// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraSlashLinearSvg from '@ant-design/icons-svg/lib/asn/CameraSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraSlashLinear: CameraSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraSlashLinearSvg}></AntdIcon>;
};

CameraSlashLinear.displayName = 'CameraSlashLinear';
CameraSlashLinear.inheritAttrs = false;
export default CameraSlashLinear;