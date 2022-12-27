// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneySendOutlineSvg from '@ant-design/icons-svg/lib/asn/MoneySendOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneySendOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneySendOutline: MoneySendOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneySendOutlineSvg}></AntdIcon>;
};

MoneySendOutline.displayName = 'MoneySendOutline';
MoneySendOutline.inheritAttrs = false;
export default MoneySendOutline;