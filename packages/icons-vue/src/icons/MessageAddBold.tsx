// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAddBoldSvg from '@ant-design/icons-svg/lib/asn/MessageAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAddBold: MessageAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAddBoldSvg}></AntdIcon>;
};

MessageAddBold.displayName = 'MessageAddBold';
MessageAddBold.inheritAttrs = false;
export default MessageAddBold;