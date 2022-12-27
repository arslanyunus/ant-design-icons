// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingBagBulkSvg from '@ant-design/icons-svg/lib/asn/ShoppingBagBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingBagBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingBagBulk: ShoppingBagBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingBagBulkSvg}></AntdIcon>;
};

ShoppingBagBulk.displayName = 'ShoppingBagBulk';
ShoppingBagBulk.inheritAttrs = false;
export default ShoppingBagBulk;