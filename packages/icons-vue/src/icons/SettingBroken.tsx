// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingBrokenSvg from '@ant-design/icons-svg/lib/asn/SettingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingBroken: SettingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingBrokenSvg}></AntdIcon>;
};

SettingBroken.displayName = 'SettingBroken';
SettingBroken.inheritAttrs = false;
export default SettingBroken;