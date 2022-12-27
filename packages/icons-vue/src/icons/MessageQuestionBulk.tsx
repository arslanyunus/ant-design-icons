// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageQuestionBulkSvg from '@ant-design/icons-svg/lib/asn/MessageQuestionBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageQuestionBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageQuestionBulk: MessageQuestionBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageQuestionBulkSvg}></AntdIcon>;
};

MessageQuestionBulk.displayName = 'MessageQuestionBulk';
MessageQuestionBulk.inheritAttrs = false;
export default MessageQuestionBulk;