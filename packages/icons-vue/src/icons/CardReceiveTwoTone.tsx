// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardReceiveTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardReceiveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardReceiveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardReceiveTwoTone: CardReceiveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardReceiveTwoToneSvg}></AntdIcon>;
};

CardReceiveTwoTone.displayName = 'CardReceiveTwoTone';
CardReceiveTwoTone.inheritAttrs = false;
export default CardReceiveTwoTone;