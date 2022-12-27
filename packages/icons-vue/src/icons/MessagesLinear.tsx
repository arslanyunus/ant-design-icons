// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessagesLinearSvg from '@ant-design/icons-svg/lib/asn/MessagesLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessagesLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessagesLinear: MessagesLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessagesLinearSvg}></AntdIcon>;
};

MessagesLinear.displayName = 'MessagesLinear';
MessagesLinear.inheritAttrs = false;
export default MessagesLinear;