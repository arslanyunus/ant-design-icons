// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Send2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send2TwoTone: Send2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send2TwoToneSvg}></AntdIcon>;
};

Send2TwoTone.displayName = 'Send2TwoTone';
Send2TwoTone.inheritAttrs = false;
export default Send2TwoTone;