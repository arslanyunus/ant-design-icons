// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownBoldSvg from '@ant-design/icons-svg/lib/asn/QuoteDownBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownBold: QuoteDownBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownBoldSvg}></AntdIcon>;
};

QuoteDownBold.displayName = 'QuoteDownBold';
QuoteDownBold.inheritAttrs = false;
export default QuoteDownBold;