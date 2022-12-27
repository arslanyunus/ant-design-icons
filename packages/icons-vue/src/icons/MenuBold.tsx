// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuBoldSvg from '@ant-design/icons-svg/lib/asn/MenuBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuBold: MenuBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuBoldSvg}></AntdIcon>;
};

MenuBold.displayName = 'MenuBold';
MenuBold.inheritAttrs = false;
export default MenuBold;