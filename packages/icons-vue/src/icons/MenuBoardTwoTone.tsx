// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuBoardTwoToneSvg from '@ant-design/icons-svg/lib/asn/MenuBoardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuBoardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuBoardTwoTone: MenuBoardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuBoardTwoToneSvg}></AntdIcon>;
};

MenuBoardTwoTone.displayName = 'MenuBoardTwoTone';
MenuBoardTwoTone.inheritAttrs = false;
export default MenuBoardTwoTone;