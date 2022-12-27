// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTickLinearSvg from '@ant-design/icons-svg/lib/asn/BagTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTickLinear: BagTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTickLinearSvg}></AntdIcon>;
};

BagTickLinear.displayName = 'BagTickLinear';
BagTickLinear.inheritAttrs = false;
export default BagTickLinear;