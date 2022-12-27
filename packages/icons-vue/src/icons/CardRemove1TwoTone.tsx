// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemove1TwoToneSvg from '@ant-design/icons-svg/lib/asn/CardRemove1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemove1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemove1TwoTone: CardRemove1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemove1TwoToneSvg}></AntdIcon>;
};

CardRemove1TwoTone.displayName = 'CardRemove1TwoTone';
CardRemove1TwoTone.inheritAttrs = false;
export default CardRemove1TwoTone;