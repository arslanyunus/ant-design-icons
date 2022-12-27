// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardBulkSvg from '@ant-design/icons-svg/lib/asn/CardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardBulk: CardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardBulkSvg}></AntdIcon>;
};

CardBulk.displayName = 'CardBulk';
CardBulk.inheritAttrs = false;
export default CardBulk;