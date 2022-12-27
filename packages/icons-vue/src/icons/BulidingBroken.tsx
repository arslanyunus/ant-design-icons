// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BulidingBrokenSvg from '@ant-design/icons-svg/lib/asn/BulidingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BulidingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BulidingBroken: BulidingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulidingBrokenSvg}></AntdIcon>;
};

BulidingBroken.displayName = 'BulidingBroken';
BulidingBroken.inheritAttrs = false;
export default BulidingBroken;