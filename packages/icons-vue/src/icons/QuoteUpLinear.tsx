// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpLinearSvg from '@ant-design/icons-svg/lib/asn/QuoteUpLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpLinear: QuoteUpLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpLinearSvg}></AntdIcon>;
};

QuoteUpLinear.displayName = 'QuoteUpLinear';
QuoteUpLinear.inheritAttrs = false;
export default QuoteUpLinear;