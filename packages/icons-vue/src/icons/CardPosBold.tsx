// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardPosBoldSvg from '@ant-design/icons-svg/lib/asn/CardPosBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardPosBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardPosBold: CardPosBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardPosBoldSvg}></AntdIcon>;
};

CardPosBold.displayName = 'CardPosBold';
CardPosBold.inheritAttrs = false;
export default CardPosBold;