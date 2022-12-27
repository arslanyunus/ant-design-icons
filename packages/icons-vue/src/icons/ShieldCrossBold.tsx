// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldCrossBoldSvg from '@ant-design/icons-svg/lib/asn/ShieldCrossBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldCrossBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldCrossBold: ShieldCrossBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldCrossBoldSvg}></AntdIcon>;
};

ShieldCrossBold.displayName = 'ShieldCrossBold';
ShieldCrossBold.inheritAttrs = false;
export default ShieldCrossBold;