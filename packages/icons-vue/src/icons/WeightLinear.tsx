// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeightLinearSvg from '@ant-design/icons-svg/lib/asn/WeightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeightLinear: WeightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeightLinearSvg}></AntdIcon>;
};

WeightLinear.displayName = 'WeightLinear';
WeightLinear.inheritAttrs = false;
export default WeightLinear;