// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuTwoToneSvg from '@ant-design/icons-svg/lib/asn/MenuTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuTwoTone: MenuTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuTwoToneSvg}></AntdIcon>;
};

MenuTwoTone.displayName = 'MenuTwoTone';
MenuTwoTone.inheritAttrs = false;
export default MenuTwoTone;