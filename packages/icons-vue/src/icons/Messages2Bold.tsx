// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages2BoldSvg from '@ant-design/icons-svg/lib/asn/Messages2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages2Bold: Messages2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages2BoldSvg}></AntdIcon>;
};

Messages2Bold.displayName = 'Messages2Bold';
Messages2Bold.inheritAttrs = false;
export default Messages2Bold;