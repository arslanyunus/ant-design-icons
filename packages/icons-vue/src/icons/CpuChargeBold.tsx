// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuChargeBoldSvg from '@ant-design/icons-svg/lib/asn/CpuChargeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuChargeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuChargeBold: CpuChargeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuChargeBoldSvg}></AntdIcon>;
};

CpuChargeBold.displayName = 'CpuChargeBold';
CpuChargeBold.inheritAttrs = false;
export default CpuChargeBold;