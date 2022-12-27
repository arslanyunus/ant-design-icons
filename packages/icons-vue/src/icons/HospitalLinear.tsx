// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HospitalLinearSvg from '@ant-design/icons-svg/lib/asn/HospitalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HospitalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HospitalLinear: HospitalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HospitalLinearSvg}></AntdIcon>;
};

HospitalLinear.displayName = 'HospitalLinear';
HospitalLinear.inheritAttrs = false;
export default HospitalLinear;