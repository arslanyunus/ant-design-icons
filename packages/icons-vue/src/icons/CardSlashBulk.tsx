// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSlashBulkSvg from '@ant-design/icons-svg/lib/asn/CardSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSlashBulk: CardSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSlashBulkSvg}></AntdIcon>;
};

CardSlashBulk.displayName = 'CardSlashBulk';
CardSlashBulk.inheritAttrs = false;
export default CardSlashBulk;