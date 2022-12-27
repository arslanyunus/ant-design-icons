// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingBulkSvg from '@ant-design/icons-svg/lib/asn/SettingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingBulk: SettingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingBulkSvg}></AntdIcon>;
};

SettingBulk.displayName = 'SettingBulk';
SettingBulk.inheritAttrs = false;
export default SettingBulk;