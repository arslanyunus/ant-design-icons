// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageText1LinearSvg from '@ant-design/icons-svg/lib/asn/MessageText1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageText1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageText1Linear: MessageText1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageText1LinearSvg}></AntdIcon>;
};

MessageText1Linear.displayName = 'MessageText1Linear';
MessageText1Linear.inheritAttrs = false;
export default MessageText1Linear;