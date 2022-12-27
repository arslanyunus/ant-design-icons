// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/QuoteUpSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpSquareOutline: QuoteUpSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpSquareOutlineSvg}></AntdIcon>;
};

QuoteUpSquareOutline.displayName = 'QuoteUpSquareOutline';
QuoteUpSquareOutline.inheritAttrs = false;
export default QuoteUpSquareOutline;