// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuLinearSvg from '@ant-design/icons-svg/lib/asn/CpuLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuLinear: CpuLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuLinearSvg}></AntdIcon>;
};

CpuLinear.displayName = 'CpuLinear';
CpuLinear.inheritAttrs = false;
export default CpuLinear;