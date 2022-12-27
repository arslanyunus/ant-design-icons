// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardsTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardsTwoTone: CardsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardsTwoToneSvg}></AntdIcon>;
};

CardsTwoTone.displayName = 'CardsTwoTone';
CardsTwoTone.inheritAttrs = false;
export default CardsTwoTone;