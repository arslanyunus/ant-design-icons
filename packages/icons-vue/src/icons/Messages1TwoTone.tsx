// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Messages1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages1TwoTone: Messages1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages1TwoToneSvg}></AntdIcon>;
};

Messages1TwoTone.displayName = 'Messages1TwoTone';
Messages1TwoTone.inheritAttrs = false;
export default Messages1TwoTone;