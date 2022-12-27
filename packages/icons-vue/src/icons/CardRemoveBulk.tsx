// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/CardRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemoveBulk: CardRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemoveBulkSvg}></AntdIcon>;
};

CardRemoveBulk.displayName = 'CardRemoveBulk';
CardRemoveBulk.inheritAttrs = false;
export default CardRemoveBulk;