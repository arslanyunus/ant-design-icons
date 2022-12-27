// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CpuSettingBulkSvg from '@ant-design/icons-svg/lib/asn/CpuSettingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CpuSettingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CpuSettingBulk: CpuSettingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CpuSettingBulkSvg}></AntdIcon>;
};

CpuSettingBulk.displayName = 'CpuSettingBulk';
CpuSettingBulk.inheritAttrs = false;
export default CpuSettingBulk;