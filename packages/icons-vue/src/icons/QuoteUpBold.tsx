// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpBoldSvg from '@ant-design/icons-svg/lib/asn/QuoteUpBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpBold: QuoteUpBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpBoldSvg}></AntdIcon>;
};

QuoteUpBold.displayName = 'QuoteUpBold';
QuoteUpBold.inheritAttrs = false;
export default QuoteUpBold;