// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuoteDownCircleBulkSvg from '@ant-design/icons-svg/lib/asn/QuoteDownCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuoteDownCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuoteDownCircleBulk: QuoteDownCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuoteDownCircleBulkSvg}></AntdIcon>;
};

QuoteDownCircleBulk.displayName = 'QuoteDownCircleBulk';
QuoteDownCircleBulk.inheritAttrs = false;
export default QuoteDownCircleBulk;