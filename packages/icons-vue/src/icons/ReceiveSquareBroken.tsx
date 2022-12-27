// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquareBroken: ReceiveSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquareBrokenSvg}></AntdIcon>;
};

ReceiveSquareBroken.displayName = 'ReceiveSquareBroken';
ReceiveSquareBroken.inheritAttrs = false;
export default ReceiveSquareBroken;