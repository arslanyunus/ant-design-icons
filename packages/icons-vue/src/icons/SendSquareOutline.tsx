// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/SendSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSquareOutline: SendSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSquareOutlineSvg}></AntdIcon>;
};

SendSquareOutline.displayName = 'SendSquareOutline';
SendSquareOutline.inheritAttrs = false;
export default SendSquareOutline;