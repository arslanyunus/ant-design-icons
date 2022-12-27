// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuBoardBulkSvg from '@ant-design/icons-svg/lib/asn/MenuBoardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuBoardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuBoardBulk: MenuBoardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuBoardBulkSvg}></AntdIcon>;
};

MenuBoardBulk.displayName = 'MenuBoardBulk';
MenuBoardBulk.inheritAttrs = false;
export default MenuBoardBulk;