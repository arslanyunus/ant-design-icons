// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownBulkSvg from '@ant-design/icons-svg/lib/asn/QuoteDownBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownBulk: QuoteDownBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownBulkSvg}></AntdIcon>;
};

QuoteDownBulk.displayName = 'QuoteDownBulk';
QuoteDownBulk.inheritAttrs = false;
export default QuoteDownBulk;