// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingsBoldSvg from '@ant-design/icons-svg/lib/asn/SettingsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingsBold: SettingsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingsBoldSvg}></AntdIcon>;
};

SettingsBold.displayName = 'SettingsBold';
SettingsBold.inheritAttrs = false;
export default SettingsBold;