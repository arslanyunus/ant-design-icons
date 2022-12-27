// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuBrokenSvg from '@ant-design/icons-svg/lib/asn/MenuBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuBroken: MenuBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuBrokenSvg}></AntdIcon>;
};

MenuBroken.displayName = 'MenuBroken';
MenuBroken.inheritAttrs = false;
export default MenuBroken;