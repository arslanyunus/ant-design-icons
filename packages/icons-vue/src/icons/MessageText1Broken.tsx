// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageText1BrokenSvg from '@ant-design/icons-svg/lib/asn/MessageText1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageText1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageText1Broken: MessageText1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageText1BrokenSvg}></AntdIcon>;
};

MessageText1Broken.displayName = 'MessageText1Broken';
MessageText1Broken.inheritAttrs = false;
export default MessageText1Broken;