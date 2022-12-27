// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShipLinearSvg from '@ant-design/icons-svg/lib/asn/ShipLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShipLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShipLinear: ShipLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShipLinearSvg}></AntdIcon>;
};

ShipLinear.displayName = 'ShipLinear';
ShipLinear.inheritAttrs = false;
export default ShipLinear;