// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuChargeOutlineSvg from '@ant-design/icons-svg/lib/asn/CpuChargeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuChargeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuChargeOutline: CpuChargeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuChargeOutlineSvg}></AntdIcon>;
};

CpuChargeOutline.displayName = 'CpuChargeOutline';
CpuChargeOutline.inheritAttrs = false;
export default CpuChargeOutline;