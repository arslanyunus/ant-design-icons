// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraLinearSvg from '@ant-design/icons-svg/lib/asn/CameraLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraLinear: CameraLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraLinearSvg}></AntdIcon>;
};

CameraLinear.displayName = 'CameraLinear';
CameraLinear.inheritAttrs = false;
export default CameraLinear;