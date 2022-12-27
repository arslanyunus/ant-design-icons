// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/CardSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSlashOutline: CardSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSlashOutlineSvg}></AntdIcon>;
};

CardSlashOutline.displayName = 'CardSlashOutline';
CardSlashOutline.inheritAttrs = false;
export default CardSlashOutline;