// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCrossLinearSvg from '@ant-design/icons-svg/lib/asn/BagCrossLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCrossLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCrossLinear: BagCrossLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCrossLinearSvg}></AntdIcon>;
};

BagCrossLinear.displayName = 'BagCrossLinear';
BagCrossLinear.inheritAttrs = false;
export default BagCrossLinear;