// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/ShopRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopRemoveBulk: ShopRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopRemoveBulkSvg}></AntdIcon>;
};

ShopRemoveBulk.displayName = 'ShopRemoveBulk';
ShopRemoveBulk.inheritAttrs = false;
export default ShopRemoveBulk;