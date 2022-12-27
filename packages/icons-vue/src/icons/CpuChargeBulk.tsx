// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuChargeBulkSvg from '@ant-design/icons-svg/lib/asn/CpuChargeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuChargeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuChargeBulk: CpuChargeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuChargeBulkSvg}></AntdIcon>;
};

CpuChargeBulk.displayName = 'CpuChargeBulk';
CpuChargeBulk.inheritAttrs = false;
export default CpuChargeBulk;