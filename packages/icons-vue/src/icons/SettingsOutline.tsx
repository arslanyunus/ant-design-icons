// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingsOutlineSvg from '@ant-design/icons-svg/lib/asn/SettingsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingsOutline: SettingsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingsOutlineSvg}></AntdIcon>;
};

SettingsOutline.displayName = 'SettingsOutline';
SettingsOutline.inheritAttrs = false;
export default SettingsOutline;