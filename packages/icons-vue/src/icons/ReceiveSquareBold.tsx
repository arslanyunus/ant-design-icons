// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquareBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquareBold: ReceiveSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquareBoldSvg}></AntdIcon>;
};

ReceiveSquareBold.displayName = 'ReceiveSquareBold';
ReceiveSquareBold.inheritAttrs = false;
export default ReceiveSquareBold;