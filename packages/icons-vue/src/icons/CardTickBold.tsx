// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTickBoldSvg from '@ant-design/icons-svg/lib/asn/CardTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTickBold: CardTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTickBoldSvg}></AntdIcon>;
};

CardTickBold.displayName = 'CardTickBold';
CardTickBold.inheritAttrs = false;
export default CardTickBold;