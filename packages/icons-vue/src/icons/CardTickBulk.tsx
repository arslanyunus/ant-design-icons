// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTickBulkSvg from '@ant-design/icons-svg/lib/asn/CardTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTickBulk: CardTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTickBulkSvg}></AntdIcon>;
};

CardTickBulk.displayName = 'CardTickBulk';
CardTickBulk.inheritAttrs = false;
export default CardTickBulk;