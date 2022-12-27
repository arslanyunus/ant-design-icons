// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/QuoteUpCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpCircleOutline: QuoteUpCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpCircleOutlineSvg}></AntdIcon>;
};

QuoteUpCircleOutline.displayName = 'QuoteUpCircleOutline';
QuoteUpCircleOutline.inheritAttrs = false;
export default QuoteUpCircleOutline;