// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownBrokenSvg from '@ant-design/icons-svg/lib/asn/QuoteDownBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownBroken: QuoteDownBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownBrokenSvg}></AntdIcon>;
};

QuoteDownBroken.displayName = 'QuoteDownBroken';
QuoteDownBroken.inheritAttrs = false;
export default QuoteDownBroken;