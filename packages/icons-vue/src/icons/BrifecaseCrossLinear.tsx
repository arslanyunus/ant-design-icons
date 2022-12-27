// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseCrossLinearSvg from '@ant-design/icons-svg/lib/asn/BrifecaseCrossLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseCrossLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseCrossLinear: BrifecaseCrossLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseCrossLinearSvg}></AntdIcon>;
};

BrifecaseCrossLinear.displayName = 'BrifecaseCrossLinear';
BrifecaseCrossLinear.inheritAttrs = false;
export default BrifecaseCrossLinear;