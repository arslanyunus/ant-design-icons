// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages2OutlineSvg from '@ant-design/icons-svg/lib/asn/Messages2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages2Outline: Messages2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages2OutlineSvg}></AntdIcon>;
};

Messages2Outline.displayName = 'Messages2Outline';
Messages2Outline.inheritAttrs = false;
export default Messages2Outline;