// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuTwoToneSvg from '@ant-design/icons-svg/lib/asn/CpuTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuTwoTone: CpuTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuTwoToneSvg}></AntdIcon>;
};

CpuTwoTone.displayName = 'CpuTwoTone';
CpuTwoTone.inheritAttrs = false;
export default CpuTwoTone;