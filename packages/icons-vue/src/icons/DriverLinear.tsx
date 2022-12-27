// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverLinearSvg from '@ant-design/icons-svg/lib/asn/DriverLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverLinear: DriverLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverLinearSvg}></AntdIcon>;
};

DriverLinear.displayName = 'DriverLinear';
DriverLinear.inheritAttrs = false;
export default DriverLinear;