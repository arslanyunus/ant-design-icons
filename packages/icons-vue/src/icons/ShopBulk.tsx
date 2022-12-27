// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopBulkSvg from '@ant-design/icons-svg/lib/asn/ShopBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopBulk: ShopBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopBulkSvg}></AntdIcon>;
};

ShopBulk.displayName = 'ShopBulk';
ShopBulk.inheritAttrs = false;
export default ShopBulk;