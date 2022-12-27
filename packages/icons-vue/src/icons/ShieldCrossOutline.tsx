// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldCrossOutlineSvg from '@ant-design/icons-svg/lib/asn/ShieldCrossOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldCrossOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldCrossOutline: ShieldCrossOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldCrossOutlineSvg}></AntdIcon>;
};

ShieldCrossOutline.displayName = 'ShieldCrossOutline';
ShieldCrossOutline.inheritAttrs = false;
export default ShieldCrossOutline;