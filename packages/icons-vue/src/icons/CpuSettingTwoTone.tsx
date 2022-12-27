// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuSettingTwoToneSvg from '@ant-design/icons-svg/lib/asn/CpuSettingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuSettingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuSettingTwoTone: CpuSettingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuSettingTwoToneSvg}></AntdIcon>;
};

CpuSettingTwoTone.displayName = 'CpuSettingTwoTone';
CpuSettingTwoTone.inheritAttrs = false;
export default CpuSettingTwoTone;