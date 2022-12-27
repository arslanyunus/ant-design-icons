// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuBoardBoldSvg from '@ant-design/icons-svg/lib/asn/MenuBoardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuBoardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuBoardBold: MenuBoardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuBoardBoldSvg}></AntdIcon>;
};

MenuBoardBold.displayName = 'MenuBoardBold';
MenuBoardBold.inheritAttrs = false;
export default MenuBoardBold;