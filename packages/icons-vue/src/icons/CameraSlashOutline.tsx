// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/CameraSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraSlashOutline: CameraSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraSlashOutlineSvg}></AntdIcon>;
};

CameraSlashOutline.displayName = 'CameraSlashOutline';
CameraSlashOutline.inheritAttrs = false;
export default CameraSlashOutline;