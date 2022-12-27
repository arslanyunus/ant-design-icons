// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/QuoteDownCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownCircleOutline: QuoteDownCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownCircleOutlineSvg}></AntdIcon>;
};

QuoteDownCircleOutline.displayName = 'QuoteDownCircleOutline';
QuoteDownCircleOutline.inheritAttrs = false;
export default QuoteDownCircleOutline;