// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldCrossBrokenSvg from '@ant-design/icons-svg/lib/asn/ShieldCrossBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldCrossBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldCrossBroken: ShieldCrossBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldCrossBrokenSvg}></AntdIcon>;
};

ShieldCrossBroken.displayName = 'ShieldCrossBroken';
ShieldCrossBroken.inheritAttrs = false;
export default ShieldCrossBroken;