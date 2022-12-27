// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingCartOutlineSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingCartOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingCartOutline: ShoppingCartOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingCartOutlineSvg}></AntdIcon>;
};

ShoppingCartOutline.displayName = 'ShoppingCartOutline';
ShoppingCartOutline.inheritAttrs = false;
export default ShoppingCartOutline;