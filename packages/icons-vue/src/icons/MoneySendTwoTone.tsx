// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneySendTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneySendTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneySendTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneySendTwoTone: MoneySendTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneySendTwoToneSvg}></AntdIcon>;
};

MoneySendTwoTone.displayName = 'MoneySendTwoTone';
MoneySendTwoTone.inheritAttrs = false;
export default MoneySendTwoTone;