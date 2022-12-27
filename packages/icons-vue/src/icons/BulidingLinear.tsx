// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BulidingLinearSvg from '@ant-design/icons-svg/lib/asn/BulidingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BulidingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BulidingLinear: BulidingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulidingLinearSvg}></AntdIcon>;
};

BulidingLinear.displayName = 'BulidingLinear';
BulidingLinear.inheritAttrs = false;
export default BulidingLinear;