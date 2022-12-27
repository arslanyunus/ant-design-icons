// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuSettingLinearSvg from '@ant-design/icons-svg/lib/asn/CpuSettingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuSettingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuSettingLinear: CpuSettingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuSettingLinearSvg}></AntdIcon>;
};

CpuSettingLinear.displayName = 'CpuSettingLinear';
CpuSettingLinear.inheritAttrs = false;
export default CpuSettingLinear;