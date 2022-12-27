// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownSquareBoldSvg from '@ant-design/icons-svg/lib/asn/QuoteDownSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownSquareBold: QuoteDownSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownSquareBoldSvg}></AntdIcon>;
};

QuoteDownSquareBold.displayName = 'QuoteDownSquareBold';
QuoteDownSquareBold.inheritAttrs = false;
export default QuoteDownSquareBold;