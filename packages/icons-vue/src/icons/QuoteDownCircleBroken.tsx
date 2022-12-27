// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/QuoteDownCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownCircleBroken: QuoteDownCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownCircleBrokenSvg}></AntdIcon>;
};

QuoteDownCircleBroken.displayName = 'QuoteDownCircleBroken';
QuoteDownCircleBroken.inheritAttrs = false;
export default QuoteDownCircleBroken;