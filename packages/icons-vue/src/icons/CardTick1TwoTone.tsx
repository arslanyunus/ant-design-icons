// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTick1TwoToneSvg from '@ant-design/icons-svg/lib/asn/CardTick1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTick1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTick1TwoTone: CardTick1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTick1TwoToneSvg}></AntdIcon>;
};

CardTick1TwoTone.displayName = 'CardTick1TwoTone';
CardTick1TwoTone.inheritAttrs = false;
export default CardTick1TwoTone;