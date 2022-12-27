// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopAddBulkSvg from '@ant-design/icons-svg/lib/asn/ShopAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopAddBulk: ShopAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopAddBulkSvg}></AntdIcon>;
};

ShopAddBulk.displayName = 'ShopAddBulk';
ShopAddBulk.inheritAttrs = false;
export default ShopAddBulk;