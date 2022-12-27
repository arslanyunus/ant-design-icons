// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/QuoteDownSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownSquareOutline: QuoteDownSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownSquareOutlineSvg}></AntdIcon>;
};

QuoteDownSquareOutline.displayName = 'QuoteDownSquareOutline';
QuoteDownSquareOutline.inheritAttrs = false;
export default QuoteDownSquareOutline;