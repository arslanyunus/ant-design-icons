// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpSquareBoldSvg from '@ant-design/icons-svg/lib/asn/QuoteUpSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpSquareBold: QuoteUpSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpSquareBoldSvg}></AntdIcon>;
};

QuoteUpSquareBold.displayName = 'QuoteUpSquareBold';
QuoteUpSquareBold.inheritAttrs = false;
export default QuoteUpSquareBold;