// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquareTwoTone: ReceiveSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquareTwoToneSvg}></AntdIcon>;
};

ReceiveSquareTwoTone.displayName = 'ReceiveSquareTwoTone';
ReceiveSquareTwoTone.inheritAttrs = false;
export default ReceiveSquareTwoTone;