// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquare2TwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquare2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquare2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquare2TwoTone: ReceiveSquare2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquare2TwoToneSvg}></AntdIcon>;
};

ReceiveSquare2TwoTone.displayName = 'ReceiveSquare2TwoTone';
ReceiveSquare2TwoTone.inheritAttrs = false;
export default ReceiveSquare2TwoTone;