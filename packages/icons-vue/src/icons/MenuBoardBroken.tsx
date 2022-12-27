// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuBoardBrokenSvg from '@ant-design/icons-svg/lib/asn/MenuBoardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuBoardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuBoardBroken: MenuBoardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuBoardBrokenSvg}></AntdIcon>;
};

MenuBoardBroken.displayName = 'MenuBoardBroken';
MenuBoardBroken.inheritAttrs = false;
export default MenuBoardBroken;