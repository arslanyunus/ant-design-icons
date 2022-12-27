// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages1OutlineSvg from '@ant-design/icons-svg/lib/asn/Messages1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages1Outline: Messages1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages1OutlineSvg}></AntdIcon>;
};

Messages1Outline.displayName = 'Messages1Outline';
Messages1Outline.inheritAttrs = false;
export default Messages1Outline;