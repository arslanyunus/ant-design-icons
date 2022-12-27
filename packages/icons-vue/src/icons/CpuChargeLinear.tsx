// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuChargeLinearSvg from '@ant-design/icons-svg/lib/asn/CpuChargeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuChargeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuChargeLinear: CpuChargeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuChargeLinearSvg}></AntdIcon>;
};

CpuChargeLinear.displayName = 'CpuChargeLinear';
CpuChargeLinear.inheritAttrs = false;
export default CpuChargeLinear;