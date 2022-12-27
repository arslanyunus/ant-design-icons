// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/CameraSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraSlashTwoTone: CameraSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraSlashTwoToneSvg}></AntdIcon>;
};

CameraSlashTwoTone.displayName = 'CameraSlashTwoTone';
CameraSlashTwoTone.inheritAttrs = false;
export default CameraSlashTwoTone;