// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemove1BulkSvg from '@ant-design/icons-svg/lib/asn/CardRemove1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemove1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemove1Bulk: CardRemove1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemove1BulkSvg}></AntdIcon>;
};

CardRemove1Bulk.displayName = 'CardRemove1Bulk';
CardRemove1Bulk.inheritAttrs = false;
export default CardRemove1Bulk;