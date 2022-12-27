// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuBulkSvg from '@ant-design/icons-svg/lib/asn/CpuBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuBulk: CpuBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuBulkSvg}></AntdIcon>;
};

CpuBulk.displayName = 'CpuBulk';
CpuBulk.inheritAttrs = false;
export default CpuBulk;