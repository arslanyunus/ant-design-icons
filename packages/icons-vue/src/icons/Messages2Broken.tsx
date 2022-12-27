// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages2BrokenSvg from '@ant-design/icons-svg/lib/asn/Messages2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages2Broken: Messages2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages2BrokenSvg}></AntdIcon>;
};

Messages2Broken.displayName = 'Messages2Broken';
Messages2Broken.inheritAttrs = false;
export default Messages2Broken;