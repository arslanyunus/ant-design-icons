// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarLeftTwoToneSvg from '@ant-design/icons-svg/lib/asn/SidebarLeftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarLeftTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarLeftTwoTone: SidebarLeftTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarLeftTwoToneSvg}></AntdIcon>;
};

SidebarLeftTwoTone.displayName = 'SidebarLeftTwoTone';
SidebarLeftTwoTone.inheritAttrs = false;
export default SidebarLeftTwoTone;