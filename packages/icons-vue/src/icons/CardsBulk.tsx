// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardsBulkSvg from '@ant-design/icons-svg/lib/asn/CardsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardsBulk: CardsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardsBulkSvg}></AntdIcon>;
};

CardsBulk.displayName = 'CardsBulk';
CardsBulk.inheritAttrs = false;
export default CardsBulk;