// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardsBoldSvg from '@ant-design/icons-svg/lib/asn/CardsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardsBold: CardsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardsBoldSvg}></AntdIcon>;
};

CardsBold.displayName = 'CardsBold';
CardsBold.inheritAttrs = false;
export default CardsBold;