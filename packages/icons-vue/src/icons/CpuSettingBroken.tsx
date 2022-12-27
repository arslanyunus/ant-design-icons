// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuSettingBrokenSvg from '@ant-design/icons-svg/lib/asn/CpuSettingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuSettingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuSettingBroken: CpuSettingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuSettingBrokenSvg}></AntdIcon>;
};

CpuSettingBroken.displayName = 'CpuSettingBroken';
CpuSettingBroken.inheritAttrs = false;
export default CpuSettingBroken;