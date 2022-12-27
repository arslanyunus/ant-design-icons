// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShipOutlineSvg from '@ant-design/icons-svg/lib/asn/ShipOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShipOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShipOutline: ShipOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShipOutlineSvg}></AntdIcon>;
};

ShipOutline.displayName = 'ShipOutline';
ShipOutline.inheritAttrs = false;
export default ShipOutline;