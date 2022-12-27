// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownLinearSvg from '@ant-design/icons-svg/lib/asn/QuoteDownLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownLinear: QuoteDownLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownLinearSvg}></AntdIcon>;
};

QuoteDownLinear.displayName = 'QuoteDownLinear';
QuoteDownLinear.inheritAttrs = false;
export default QuoteDownLinear;