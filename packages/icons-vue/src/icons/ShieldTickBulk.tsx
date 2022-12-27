// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldTickBulkSvg from '@ant-design/icons-svg/lib/asn/ShieldTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldTickBulk: ShieldTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldTickBulkSvg}></AntdIcon>;
};

ShieldTickBulk.displayName = 'ShieldTickBulk';
ShieldTickBulk.inheritAttrs = false;
export default ShieldTickBulk;