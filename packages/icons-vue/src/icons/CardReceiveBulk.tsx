// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardReceiveBulkSvg from '@ant-design/icons-svg/lib/asn/CardReceiveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardReceiveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardReceiveBulk: CardReceiveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardReceiveBulkSvg}></AntdIcon>;
};

CardReceiveBulk.displayName = 'CardReceiveBulk';
CardReceiveBulk.inheritAttrs = false;
export default CardReceiveBulk;