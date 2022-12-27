// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShipBoldSvg from '@ant-design/icons-svg/lib/asn/ShipBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShipBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShipBold: ShipBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShipBoldSvg}></AntdIcon>;
};

ShipBold.displayName = 'ShipBold';
ShipBold.inheritAttrs = false;
export default ShipBold;