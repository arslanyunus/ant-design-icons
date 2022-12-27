// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquare2OutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquare2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquare2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquare2Outline: ReceiveSquare2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquare2OutlineSvg}></AntdIcon>;
};

ReceiveSquare2Outline.displayName = 'ReceiveSquare2Outline';
ReceiveSquare2Outline.inheritAttrs = false;
export default ReceiveSquare2Outline;