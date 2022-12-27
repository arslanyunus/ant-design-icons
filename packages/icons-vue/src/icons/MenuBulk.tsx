// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuBulkSvg from '@ant-design/icons-svg/lib/asn/MenuBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuBulk: MenuBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuBulkSvg}></AntdIcon>;
};

MenuBulk.displayName = 'MenuBulk';
MenuBulk.inheritAttrs = false;
export default MenuBulk;