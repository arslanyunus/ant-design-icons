// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Messages3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages3TwoTone: Messages3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages3TwoToneSvg}></AntdIcon>;
};

Messages3TwoTone.displayName = 'Messages3TwoTone';
Messages3TwoTone.inheritAttrs = false;
export default Messages3TwoTone;