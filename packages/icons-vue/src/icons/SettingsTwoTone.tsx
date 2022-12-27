// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingsTwoToneSvg from '@ant-design/icons-svg/lib/asn/SettingsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingsTwoTone: SettingsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingsTwoToneSvg}></AntdIcon>;
};

SettingsTwoTone.displayName = 'SettingsTwoTone';
SettingsTwoTone.inheritAttrs = false;
export default SettingsTwoTone;