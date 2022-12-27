// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTick1BulkSvg from '@ant-design/icons-svg/lib/asn/CardTick1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTick1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTick1Bulk: CardTick1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTick1BulkSvg}></AntdIcon>;
};

CardTick1Bulk.displayName = 'CardTick1Bulk';
CardTick1Bulk.inheritAttrs = false;
export default CardTick1Bulk;