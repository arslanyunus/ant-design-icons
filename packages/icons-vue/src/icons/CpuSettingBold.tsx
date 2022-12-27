// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuSettingBoldSvg from '@ant-design/icons-svg/lib/asn/CpuSettingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuSettingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuSettingBold: CpuSettingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuSettingBoldSvg}></AntdIcon>;
};

CpuSettingBold.displayName = 'CpuSettingBold';
CpuSettingBold.inheritAttrs = false;
export default CpuSettingBold;