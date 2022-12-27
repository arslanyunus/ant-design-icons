// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagHappyBrokenSvg from '@ant-design/icons-svg/lib/asn/BagHappyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagHappyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagHappyBroken: BagHappyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagHappyBrokenSvg}></AntdIcon>;
};

BagHappyBroken.displayName = 'BagHappyBroken';
BagHappyBroken.inheritAttrs = false;
export default BagHappyBroken;