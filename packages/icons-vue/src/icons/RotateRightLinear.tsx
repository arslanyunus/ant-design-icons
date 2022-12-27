// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRightLinearSvg from '@ant-design/icons-svg/lib/asn/RotateRightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRightLinear: RotateRightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRightLinearSvg}></AntdIcon>;
};

RotateRightLinear.displayName = 'RotateRightLinear';
RotateRightLinear.inheritAttrs = false;
export default RotateRightLinear;