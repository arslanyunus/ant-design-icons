// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpCircleLinearSvg from '@ant-design/icons-svg/lib/asn/QuoteUpCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpCircleLinear: QuoteUpCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpCircleLinearSvg}></AntdIcon>;
};

QuoteUpCircleLinear.displayName = 'QuoteUpCircleLinear';
QuoteUpCircleLinear.inheritAttrs = false;
export default QuoteUpCircleLinear;