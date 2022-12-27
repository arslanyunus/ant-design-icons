// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardPosBulkSvg from '@ant-design/icons-svg/lib/asn/CardPosBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardPosBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardPosBulk: CardPosBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardPosBulkSvg}></AntdIcon>;
};

CardPosBulk.displayName = 'CardPosBulk';
CardPosBulk.inheritAttrs = false;
export default CardPosBulk;