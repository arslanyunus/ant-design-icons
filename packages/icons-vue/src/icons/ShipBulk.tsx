// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShipBulkSvg from '@ant-design/icons-svg/lib/asn/ShipBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShipBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShipBulk: ShipBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShipBulkSvg}></AntdIcon>;
};

ShipBulk.displayName = 'ShipBulk';
ShipBulk.inheritAttrs = false;
export default ShipBulk;