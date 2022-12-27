// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardPosTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardPosTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardPosTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardPosTwoTone: CardPosTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardPosTwoToneSvg}></AntdIcon>;
};

CardPosTwoTone.displayName = 'CardPosTwoTone';
CardPosTwoTone.inheritAttrs = false;
export default CardPosTwoTone;