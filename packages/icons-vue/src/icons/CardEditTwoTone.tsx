// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardEditTwoTone: CardEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardEditTwoToneSvg}></AntdIcon>;
};

CardEditTwoTone.displayName = 'CardEditTwoTone';
CardEditTwoTone.inheritAttrs = false;
export default CardEditTwoTone;