// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTwoTone: CardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTwoToneSvg}></AntdIcon>;
};

CardTwoTone.displayName = 'CardTwoTone';
CardTwoTone.inheritAttrs = false;
export default CardTwoTone;