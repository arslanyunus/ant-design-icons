// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSendBulkSvg from '@ant-design/icons-svg/lib/asn/CardSendBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSendBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSendBulk: CardSendBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSendBulkSvg}></AntdIcon>;
};

CardSendBulk.displayName = 'CardSendBulk';
CardSendBulk.inheritAttrs = false;
export default CardSendBulk;