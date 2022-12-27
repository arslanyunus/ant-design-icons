// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpOutlineSvg from '@ant-design/icons-svg/lib/asn/QuoteUpOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpOutline: QuoteUpOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpOutlineSvg}></AntdIcon>;
};

QuoteUpOutline.displayName = 'QuoteUpOutline';
QuoteUpOutline.inheritAttrs = false;
export default QuoteUpOutline;