// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingOutlineSvg from '@ant-design/icons-svg/lib/asn/SettingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingOutline: SettingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingOutlineSvg}></AntdIcon>;
};

SettingOutline.displayName = 'SettingOutline';
SettingOutline.inheritAttrs = false;
export default SettingOutline;