// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BusBrokenSvg from '@ant-design/icons-svg/lib/asn/BusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BusBroken: BusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BusBrokenSvg}></AntdIcon>;
};

BusBroken.displayName = 'BusBroken';
BusBroken.inheritAttrs = false;
export default BusBroken;