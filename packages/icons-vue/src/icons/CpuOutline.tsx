// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuOutlineSvg from '@ant-design/icons-svg/lib/asn/CpuOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuOutline: CpuOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuOutlineSvg}></AntdIcon>;
};

CpuOutline.displayName = 'CpuOutline';
CpuOutline.inheritAttrs = false;
export default CpuOutline;