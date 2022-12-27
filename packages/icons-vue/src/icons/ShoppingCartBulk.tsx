// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingCartBulkSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingCartBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingCartBulk: ShoppingCartBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingCartBulkSvg}></AntdIcon>;
};

ShoppingCartBulk.displayName = 'ShoppingCartBulk';
ShoppingCartBulk.inheritAttrs = false;
export default ShoppingCartBulk;