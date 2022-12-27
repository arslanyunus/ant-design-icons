// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuBoldSvg from '@ant-design/icons-svg/lib/asn/CpuBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuBold: CpuBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuBoldSvg}></AntdIcon>;
};

CpuBold.displayName = 'CpuBold';
CpuBold.inheritAttrs = false;
export default CpuBold;