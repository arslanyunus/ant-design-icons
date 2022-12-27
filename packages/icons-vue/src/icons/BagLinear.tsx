// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagLinearSvg from '@ant-design/icons-svg/lib/asn/BagLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagLinear: BagLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagLinearSvg}></AntdIcon>;
};

BagLinear.displayName = 'BagLinear';
BagLinear.inheritAttrs = false;
export default BagLinear;