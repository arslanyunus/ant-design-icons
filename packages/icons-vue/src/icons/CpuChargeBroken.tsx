// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuChargeBrokenSvg from '@ant-design/icons-svg/lib/asn/CpuChargeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuChargeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuChargeBroken: CpuChargeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuChargeBrokenSvg}></AntdIcon>;
};

CpuChargeBroken.displayName = 'CpuChargeBroken';
CpuChargeBroken.inheritAttrs = false;
export default CpuChargeBroken;