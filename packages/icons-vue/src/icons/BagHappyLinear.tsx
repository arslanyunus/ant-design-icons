// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagHappyLinearSvg from '@ant-design/icons-svg/lib/asn/BagHappyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagHappyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagHappyLinear: BagHappyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagHappyLinearSvg}></AntdIcon>;
};

BagHappyLinear.displayName = 'BagHappyLinear';
BagHappyLinear.inheritAttrs = false;
export default BagHappyLinear;