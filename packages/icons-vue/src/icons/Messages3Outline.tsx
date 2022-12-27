// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages3OutlineSvg from '@ant-design/icons-svg/lib/asn/Messages3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages3Outline: Messages3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages3OutlineSvg}></AntdIcon>;
};

Messages3Outline.displayName = 'Messages3Outline';
Messages3Outline.inheritAttrs = false;
export default Messages3Outline;