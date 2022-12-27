// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageText1BoldSvg from '@ant-design/icons-svg/lib/asn/MessageText1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageText1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageText1Bold: MessageText1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageText1BoldSvg}></AntdIcon>;
};

MessageText1Bold.displayName = 'MessageText1Bold';
MessageText1Bold.inheritAttrs = false;
export default MessageText1Bold;