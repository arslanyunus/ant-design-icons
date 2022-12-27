// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SidebarBottomTwoToneSvg from '@ant-design/icons-svg/lib/asn/SidebarBottomTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SidebarBottomTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SidebarBottomTwoTone: SidebarBottomTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SidebarBottomTwoToneSvg}></AntdIcon>;
};

SidebarBottomTwoTone.displayName = 'SidebarBottomTwoTone';
SidebarBottomTwoTone.inheritAttrs = false;
export default SidebarBottomTwoTone;