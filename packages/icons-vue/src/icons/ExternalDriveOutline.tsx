// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExternalDriveOutlineSvg from '@ant-design/icons-svg/lib/asn/ExternalDriveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExternalDriveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExternalDriveOutline: ExternalDriveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExternalDriveOutlineSvg}></AntdIcon>;
};

ExternalDriveOutline.displayName = 'ExternalDriveOutline';
ExternalDriveOutline.inheritAttrs = false;
export default ExternalDriveOutline;