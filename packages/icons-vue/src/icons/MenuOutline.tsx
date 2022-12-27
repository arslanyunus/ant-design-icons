// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuOutlineSvg from '@ant-design/icons-svg/lib/asn/MenuOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuOutline: MenuOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuOutlineSvg}></AntdIcon>;
};

MenuOutline.displayName = 'MenuOutline';
MenuOutline.inheritAttrs = false;
export default MenuOutline;