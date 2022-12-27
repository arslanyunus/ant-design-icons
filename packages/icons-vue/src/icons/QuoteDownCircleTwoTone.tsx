// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuoteDownCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownCircleTwoTone: QuoteDownCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownCircleTwoToneSvg}></AntdIcon>;
};

QuoteDownCircleTwoTone.displayName = 'QuoteDownCircleTwoTone';
QuoteDownCircleTwoTone.inheritAttrs = false;
export default QuoteDownCircleTwoTone;