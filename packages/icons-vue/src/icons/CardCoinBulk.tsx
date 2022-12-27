// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardCoinBulkSvg from '@ant-design/icons-svg/lib/asn/CardCoinBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardCoinBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardCoinBulk: CardCoinBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardCoinBulkSvg}></AntdIcon>;
};

CardCoinBulk.displayName = 'CardCoinBulk';
CardCoinBulk.inheritAttrs = false;
export default CardCoinBulk;