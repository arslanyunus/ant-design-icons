// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpBulkSvg from '@ant-design/icons-svg/lib/asn/QuoteUpBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpBulk: QuoteUpBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpBulkSvg}></AntdIcon>;
};

QuoteUpBulk.displayName = 'QuoteUpBulk';
QuoteUpBulk.inheritAttrs = false;
export default QuoteUpBulk;