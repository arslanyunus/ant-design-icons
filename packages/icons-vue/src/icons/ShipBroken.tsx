// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShipBrokenSvg from '@ant-design/icons-svg/lib/asn/ShipBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShipBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShipBroken: ShipBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShipBrokenSvg}></AntdIcon>;
};

ShipBroken.displayName = 'ShipBroken';
ShipBroken.inheritAttrs = false;
export default ShipBroken;