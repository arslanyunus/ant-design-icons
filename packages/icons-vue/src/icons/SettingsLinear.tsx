// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingsLinearSvg from '@ant-design/icons-svg/lib/asn/SettingsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingsLinear: SettingsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingsLinearSvg}></AntdIcon>;
};

SettingsLinear.displayName = 'SettingsLinear';
SettingsLinear.inheritAttrs = false;
export default SettingsLinear;