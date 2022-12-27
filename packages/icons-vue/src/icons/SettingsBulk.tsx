// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingsBulkSvg from '@ant-design/icons-svg/lib/asn/SettingsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingsBulk: SettingsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingsBulkSvg}></AntdIcon>;
};

SettingsBulk.displayName = 'SettingsBulk';
SettingsBulk.inheritAttrs = false;
export default SettingsBulk;