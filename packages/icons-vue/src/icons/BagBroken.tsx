// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagBrokenSvg from '@ant-design/icons-svg/lib/asn/BagBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagBroken: BagBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagBrokenSvg}></AntdIcon>;
};

BagBroken.displayName = 'BagBroken';
BagBroken.inheritAttrs = false;
export default BagBroken;