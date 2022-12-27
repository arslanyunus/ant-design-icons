// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCrossBrokenSvg from '@ant-design/icons-svg/lib/asn/BagCrossBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCrossBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCrossBroken: BagCrossBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCrossBrokenSvg}></AntdIcon>;
};

BagCrossBroken.displayName = 'BagCrossBroken';
BagCrossBroken.inheritAttrs = false;
export default BagCrossBroken;