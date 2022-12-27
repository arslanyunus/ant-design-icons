// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpCircleBoldSvg from '@ant-design/icons-svg/lib/asn/QuoteUpCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpCircleBold: QuoteUpCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpCircleBoldSvg}></AntdIcon>;
};

QuoteUpCircleBold.displayName = 'QuoteUpCircleBold';
QuoteUpCircleBold.inheritAttrs = false;
export default QuoteUpCircleBold;