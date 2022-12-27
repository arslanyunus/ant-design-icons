// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownSquareLinearSvg from '@ant-design/icons-svg/lib/asn/QuoteDownSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownSquareLinear: QuoteDownSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownSquareLinearSvg}></AntdIcon>;
};

QuoteDownSquareLinear.displayName = 'QuoteDownSquareLinear';
QuoteDownSquareLinear.inheritAttrs = false;
export default QuoteDownSquareLinear;