// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuChargeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CpuChargeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuChargeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuChargeTwoTone: CpuChargeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuChargeTwoToneSvg}></AntdIcon>;
};

CpuChargeTwoTone.displayName = 'CpuChargeTwoTone';
CpuChargeTwoTone.inheritAttrs = false;
export default CpuChargeTwoTone;