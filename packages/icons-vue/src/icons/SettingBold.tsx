// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingBoldSvg from '@ant-design/icons-svg/lib/asn/SettingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingBold: SettingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingBoldSvg}></AntdIcon>;
};

SettingBold.displayName = 'SettingBold';
SettingBold.inheritAttrs = false;
export default SettingBold;