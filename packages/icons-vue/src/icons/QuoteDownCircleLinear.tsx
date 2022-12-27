// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownCircleLinearSvg from '@ant-design/icons-svg/lib/asn/QuoteDownCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownCircleLinear: QuoteDownCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownCircleLinearSvg}></AntdIcon>;
};

QuoteDownCircleLinear.displayName = 'QuoteDownCircleLinear';
QuoteDownCircleLinear.inheritAttrs = false;
export default QuoteDownCircleLinear;