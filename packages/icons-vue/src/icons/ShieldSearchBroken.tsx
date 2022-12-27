// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/ShieldSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSearchBroken: ShieldSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSearchBrokenSvg}></AntdIcon>;
};

ShieldSearchBroken.displayName = 'ShieldSearchBroken';
ShieldSearchBroken.inheritAttrs = false;
export default ShieldSearchBroken;