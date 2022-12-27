// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/QuoteUpCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpCircleBroken: QuoteUpCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpCircleBrokenSvg}></AntdIcon>;
};

QuoteUpCircleBroken.displayName = 'QuoteUpCircleBroken';
QuoteUpCircleBroken.inheritAttrs = false;
export default QuoteUpCircleBroken;