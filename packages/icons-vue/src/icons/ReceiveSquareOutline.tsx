// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiveSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiveSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiveSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiveSquareOutline: ReceiveSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiveSquareOutlineSvg}></AntdIcon>;
};

ReceiveSquareOutline.displayName = 'ReceiveSquareOutline';
ReceiveSquareOutline.inheritAttrs = false;
export default ReceiveSquareOutline;