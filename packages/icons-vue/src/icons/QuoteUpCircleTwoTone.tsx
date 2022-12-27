// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuoteUpCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpCircleTwoTone: QuoteUpCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpCircleTwoToneSvg}></AntdIcon>;
};

QuoteUpCircleTwoTone.displayName = 'QuoteUpCircleTwoTone';
QuoteUpCircleTwoTone.inheritAttrs = false;
export default QuoteUpCircleTwoTone;