// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HealthLinearSvg from '@ant-design/icons-svg/lib/asn/HealthLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HealthLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HealthLinear: HealthLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HealthLinearSvg}></AntdIcon>;
};

HealthLinear.displayName = 'HealthLinear';
HealthLinear.inheritAttrs = false;
export default HealthLinear;