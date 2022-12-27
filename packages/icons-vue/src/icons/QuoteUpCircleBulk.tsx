// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteUpCircleBulkSvg from '@ant-design/icons-svg/lib/asn/QuoteUpCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteUpCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteUpCircleBulk: QuoteUpCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteUpCircleBulkSvg}></AntdIcon>;
};

QuoteUpCircleBulk.displayName = 'QuoteUpCircleBulk';
QuoteUpCircleBulk.inheritAttrs = false;
export default QuoteUpCircleBulk;