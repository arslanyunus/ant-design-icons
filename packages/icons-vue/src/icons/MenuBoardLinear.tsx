// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuBoardLinearSvg from '@ant-design/icons-svg/lib/asn/MenuBoardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuBoardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuBoardLinear: MenuBoardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuBoardLinearSvg}></AntdIcon>;
};

MenuBoardLinear.displayName = 'MenuBoardLinear';
MenuBoardLinear.inheritAttrs = false;
export default MenuBoardLinear;