// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneySendBoldSvg from '@ant-design/icons-svg/lib/asn/MoneySendBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneySendBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneySendBold: MoneySendBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneySendBoldSvg}></AntdIcon>;
};

MoneySendBold.displayName = 'MoneySendBold';
MoneySendBold.inheritAttrs = false;
export default MoneySendBold;