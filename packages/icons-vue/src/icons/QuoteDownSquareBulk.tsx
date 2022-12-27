// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownSquareBulkSvg from '@ant-design/icons-svg/lib/asn/QuoteDownSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownSquareBulk: QuoteDownSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownSquareBulkSvg}></AntdIcon>;
};

QuoteDownSquareBulk.displayName = 'QuoteDownSquareBulk';
QuoteDownSquareBulk.inheritAttrs = false;
export default QuoteDownSquareBulk;