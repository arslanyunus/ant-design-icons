// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneySendBrokenSvg from '@ant-design/icons-svg/lib/asn/MoneySendBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneySendBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneySendBroken: MoneySendBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneySendBrokenSvg}></AntdIcon>;
};

MoneySendBroken.displayName = 'MoneySendBroken';
MoneySendBroken.inheritAttrs = false;
export default MoneySendBroken;