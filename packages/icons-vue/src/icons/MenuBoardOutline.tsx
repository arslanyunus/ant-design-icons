// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuBoardOutlineSvg from '@ant-design/icons-svg/lib/asn/MenuBoardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuBoardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuBoardOutline: MenuBoardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuBoardOutlineSvg}></AntdIcon>;
};

MenuBoardOutline.displayName = 'MenuBoardOutline';
MenuBoardOutline.inheritAttrs = false;
export default MenuBoardOutline;