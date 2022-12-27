// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquareLinearSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquareLinear: ArrangeSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquareLinearSvg}></AntdIcon>;
};

ArrangeSquareLinear.displayName = 'ArrangeSquareLinear';
ArrangeSquareLinear.inheritAttrs = false;
export default ArrangeSquareLinear;