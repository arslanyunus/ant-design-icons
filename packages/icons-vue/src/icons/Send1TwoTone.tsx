// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Send1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send1TwoTone: Send1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send1TwoToneSvg}></AntdIcon>;
};

Send1TwoTone.displayName = 'Send1TwoTone';
Send1TwoTone.inheritAttrs = false;
export default Send1TwoTone;