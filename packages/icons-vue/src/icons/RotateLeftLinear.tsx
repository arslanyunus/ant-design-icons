// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeftLinearSvg from '@ant-design/icons-svg/lib/asn/RotateLeftLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeftLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeftLinear: RotateLeftLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeftLinearSvg}></AntdIcon>;
};

RotateLeftLinear.displayName = 'RotateLeftLinear';
RotateLeftLinear.inheritAttrs = false;
export default RotateLeftLinear;