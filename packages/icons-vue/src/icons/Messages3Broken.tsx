// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages3BrokenSvg from '@ant-design/icons-svg/lib/asn/Messages3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages3Broken: Messages3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages3BrokenSvg}></AntdIcon>;
};

Messages3Broken.displayName = 'Messages3Broken';
Messages3Broken.inheritAttrs = false;
export default Messages3Broken;