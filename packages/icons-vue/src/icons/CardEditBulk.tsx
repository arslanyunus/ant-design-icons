// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardEditBulkSvg from '@ant-design/icons-svg/lib/asn/CardEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardEditBulk: CardEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardEditBulkSvg}></AntdIcon>;
};

CardEditBulk.displayName = 'CardEditBulk';
CardEditBulk.inheritAttrs = false;
export default CardEditBulk;