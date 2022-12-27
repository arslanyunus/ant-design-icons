// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/QuoteDownSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownSquareBroken: QuoteDownSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownSquareBrokenSvg}></AntdIcon>;
};

QuoteDownSquareBroken.displayName = 'QuoteDownSquareBroken';
QuoteDownSquareBroken.inheritAttrs = false;
export default QuoteDownSquareBroken;