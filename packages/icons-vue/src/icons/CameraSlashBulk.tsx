// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraSlashBulkSvg from '@ant-design/icons-svg/lib/asn/CameraSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraSlashBulk: CameraSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraSlashBulkSvg}></AntdIcon>;
};

CameraSlashBulk.displayName = 'CameraSlashBulk';
CameraSlashBulk.inheritAttrs = false;
export default CameraSlashBulk;