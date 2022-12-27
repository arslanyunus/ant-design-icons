// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuoteDownSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownSquareTwoTone: QuoteDownSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownSquareTwoToneSvg}></AntdIcon>;
};

QuoteDownSquareTwoTone.displayName = 'QuoteDownSquareTwoTone';
QuoteDownSquareTwoTone.inheritAttrs = false;
export default QuoteDownSquareTwoTone;