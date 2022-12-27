// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownCircleBoldSvg from '@ant-design/icons-svg/lib/asn/QuoteDownCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownCircleBold: QuoteDownCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownCircleBoldSvg}></AntdIcon>;
};

QuoteDownCircleBold.displayName = 'QuoteDownCircleBold';
QuoteDownCircleBold.inheritAttrs = false;
export default QuoteDownCircleBold;