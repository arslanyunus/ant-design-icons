// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartCircleLinearSvg from '@ant-design/icons-svg/lib/asn/HeartCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartCircleLinear: HeartCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartCircleLinearSvg}></AntdIcon>;
};

HeartCircleLinear.displayName = 'HeartCircleLinear';
HeartCircleLinear.inheritAttrs = false;
export default HeartCircleLinear;