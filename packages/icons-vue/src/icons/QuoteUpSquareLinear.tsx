// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpSquareLinearSvg from '@ant-design/icons-svg/lib/asn/QuoteUpSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpSquareLinear: QuoteUpSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpSquareLinearSvg}></AntdIcon>;
};

QuoteUpSquareLinear.displayName = 'QuoteUpSquareLinear';
QuoteUpSquareLinear.inheritAttrs = false;
export default QuoteUpSquareLinear;