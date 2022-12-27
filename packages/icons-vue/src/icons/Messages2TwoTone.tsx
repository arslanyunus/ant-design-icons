// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Messages2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages2TwoTone: Messages2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages2TwoToneSvg}></AntdIcon>;
};

Messages2TwoTone.displayName = 'Messages2TwoTone';
Messages2TwoTone.inheritAttrs = false;
export default Messages2TwoTone;