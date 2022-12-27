// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendOutlineSvg from '@ant-design/icons-svg/lib/asn/SendOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendOutline: SendOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendOutlineSvg}></AntdIcon>;
};

SendOutline.displayName = 'SendOutline';
SendOutline.inheritAttrs = false;
export default SendOutline;