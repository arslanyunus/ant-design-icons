// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingsBrokenSvg from '@ant-design/icons-svg/lib/asn/SettingsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingsBroken: SettingsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingsBrokenSvg}></AntdIcon>;
};

SettingsBroken.displayName = 'SettingsBroken';
SettingsBroken.inheritAttrs = false;
export default SettingsBroken;