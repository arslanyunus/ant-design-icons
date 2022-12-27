// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessagesOutlineSvg from '@ant-design/icons-svg/lib/asn/MessagesOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessagesOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessagesOutline: MessagesOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessagesOutlineSvg}></AntdIcon>;
};

MessagesOutline.displayName = 'MessagesOutline';
MessagesOutline.inheritAttrs = false;
export default MessagesOutline;