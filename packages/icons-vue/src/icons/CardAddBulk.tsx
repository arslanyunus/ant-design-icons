// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardAddBulkSvg from '@ant-design/icons-svg/lib/asn/CardAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardAddBulk: CardAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardAddBulkSvg}></AntdIcon>;
};

CardAddBulk.displayName = 'CardAddBulk';
CardAddBulk.inheritAttrs = false;
export default CardAddBulk;