// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuoteUpSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpSquareTwoTone: QuoteUpSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpSquareTwoToneSvg}></AntdIcon>;
};

QuoteUpSquareTwoTone.displayName = 'QuoteUpSquareTwoTone';
QuoteUpSquareTwoTone.inheritAttrs = false;
export default QuoteUpSquareTwoTone;