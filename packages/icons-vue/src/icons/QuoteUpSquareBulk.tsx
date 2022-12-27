// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpSquareBulkSvg from '@ant-design/icons-svg/lib/asn/QuoteUpSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpSquareBulk: QuoteUpSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpSquareBulkSvg}></AntdIcon>;
};

QuoteUpSquareBulk.displayName = 'QuoteUpSquareBulk';
QuoteUpSquareBulk.inheritAttrs = false;
export default QuoteUpSquareBulk;