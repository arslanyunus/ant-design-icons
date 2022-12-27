// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownOutlineSvg from '@ant-design/icons-svg/lib/asn/QuoteDownOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownOutline: QuoteDownOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownOutlineSvg}></AntdIcon>;
};

QuoteDownOutline.displayName = 'QuoteDownOutline';
QuoteDownOutline.inheritAttrs = false;
export default QuoteDownOutline;