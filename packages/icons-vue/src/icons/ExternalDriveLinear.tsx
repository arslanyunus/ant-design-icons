// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExternalDriveLinearSvg from '@ant-design/icons-svg/lib/asn/ExternalDriveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExternalDriveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExternalDriveLinear: ExternalDriveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExternalDriveLinearSvg}></AntdIcon>;
};

ExternalDriveLinear.displayName = 'ExternalDriveLinear';
ExternalDriveLinear.inheritAttrs = false;
export default ExternalDriveLinear;