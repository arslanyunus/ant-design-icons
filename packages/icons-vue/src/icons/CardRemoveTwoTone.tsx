// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemoveTwoTone: CardRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemoveTwoToneSvg}></AntdIcon>;
};

CardRemoveTwoTone.displayName = 'CardRemoveTwoTone';
CardRemoveTwoTone.inheritAttrs = false;
export default CardRemoveTwoTone;