// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuoteUpTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpTwoTone: QuoteUpTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpTwoToneSvg}></AntdIcon>;
};

QuoteUpTwoTone.displayName = 'QuoteUpTwoTone';
QuoteUpTwoTone.inheritAttrs = false;
export default QuoteUpTwoTone;