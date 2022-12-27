// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircleLinearSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircleLinear: ArrangeCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircleLinearSvg}></AntdIcon>;
};

ArrangeCircleLinear.displayName = 'ArrangeCircleLinear';
ArrangeCircleLinear.inheritAttrs = false;
export default ArrangeCircleLinear;