// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuSettingOutlineSvg from '@ant-design/icons-svg/lib/asn/CpuSettingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuSettingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuSettingOutline: CpuSettingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuSettingOutlineSvg}></AntdIcon>;
};

CpuSettingOutline.displayName = 'CpuSettingOutline';
CpuSettingOutline.inheritAttrs = false;
export default CpuSettingOutline;