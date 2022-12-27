// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuBrokenSvg from '@ant-design/icons-svg/lib/asn/CpuBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuBroken: CpuBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuBrokenSvg}></AntdIcon>;
};

CpuBroken.displayName = 'CpuBroken';
CpuBroken.inheritAttrs = false;
export default CpuBroken;