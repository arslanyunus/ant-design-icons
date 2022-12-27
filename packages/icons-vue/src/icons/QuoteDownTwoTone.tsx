// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuoteDownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownTwoTone: QuoteDownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownTwoToneSvg}></AntdIcon>;
};

QuoteDownTwoTone.displayName = 'QuoteDownTwoTone';
QuoteDownTwoTone.inheritAttrs = false;
export default QuoteDownTwoTone;