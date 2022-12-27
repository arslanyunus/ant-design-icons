// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuLinearSvg from '@ant-design/icons-svg/lib/asn/MenuLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuLinear: MenuLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuLinearSvg}></AntdIcon>;
};

MenuLinear.displayName = 'MenuLinear';
MenuLinear.inheritAttrs = false;
export default MenuLinear;