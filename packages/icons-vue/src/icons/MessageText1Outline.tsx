// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageText1OutlineSvg from '@ant-design/icons-svg/lib/asn/MessageText1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageText1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageText1Outline: MessageText1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageText1OutlineSvg}></AntdIcon>;
};

MessageText1Outline.displayName = 'MessageText1Outline';
MessageText1Outline.inheritAttrs = false;
export default MessageText1Outline;