// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/QuoteUpSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpSquareBroken: QuoteUpSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpSquareBrokenSvg}></AntdIcon>;
};

QuoteUpSquareBroken.displayName = 'QuoteUpSquareBroken';
QuoteUpSquareBroken.inheritAttrs = false;
export default QuoteUpSquareBroken;